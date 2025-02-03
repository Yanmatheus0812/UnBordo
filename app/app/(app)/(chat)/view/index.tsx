import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList, StyleSheet, Platform } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import ChatHeader from '@/components/ui/chat/chatHeader';
import MessageInput from '@/components/ui/chat/messageInput';
import MessageBalloon from '@/components/ui/chat/message';
import { useUnBordo } from '@/hooks/unbordo';
import { IChatMessage } from '@/interfaces/application';
import { useQuery } from '@tanstack/react-query';
import { ChatService } from '@/services/http/services/chat';

export default function ChatView() {
  const { chatId } = useLocalSearchParams() as { chatId: string };
  const {
    auth: { student },
    socket,
  } = useUnBordo();

  const [messages, setMessages] = useState<IChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const chatView = useRef<FlatList | null>(null);

  const query = useQuery({
    queryKey: ['chat', chatId],
    queryFn: () => ChatService.get(chatId),
  });
  const handleSendMessage = (message: string, imageUri: string | null) => {
    if (message.trim() || imageUri) {
      if (!socket || !socket?.connected) return;

      socket.emit('send-message', {
        chatId,
        message: message,
      });

      setInputMessage('');
    }
  };

  const renderMessageItem = ({ item }: { item: IChatMessage }) => (
    <MessageBalloon
      text={item.message}
      sender={item.senderId === student.id ? 'me' : 'them'}
      // image={item.image}
    />
  );

  useEffect(() => {
    if (socket && socket.connected) {
      socket.on(chatId, (newMsg: IChatMessage) => {
        setMessages((old) => [...old, newMsg]);
      });
    }
  }, [socket]);

  const chat = query.data?.data;

  const me = query.data?.data.studentId === student.id ? 'student' : 'tutor';
  const them = chat?.[me === 'student' ? 'tutor' : 'student'];

  useEffect(() => {
    if(chat?.messages) {
      setMessages(old => [
        ...chat.messages,
        ...old,
      ])
    }
  }, [chat?.messages])

  return (
    <View style={styles.container}>
      {/* username e userImage são dados simulados da pasta anterior*/}
      <ChatHeader
        username={them?.name || ''}
        userImage={chat?.student.avatarUrl || ''}
      />
      <FlatList
        data={messages}
        ref={chatView}
        onContentSizeChange={() => chatView.current?.scrollToEnd()}
        keyExtractor={(item) => item.id}
        renderItem={renderMessageItem}
        contentContainerStyle={styles.messagesContainer}
      />
      <MessageInput
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
        handleSendMessage={handleSendMessage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 100,
    paddingBottom: Platform.OS === 'ios' ? 100 : 0,
  },
  messagesContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 100, // Adiciona paddingBottom para evitar que o conteúdo fique atrás do campo de entrada
    // marginBottom: 100,
    marginTop: 100,
  },
});
