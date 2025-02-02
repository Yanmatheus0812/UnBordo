import {
  View,
  Text,
  Pressable,
  Modal,
  TextInput,
  Keyboard,
} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Input } from '@/components/ui/input2';
import SVGArrowDown from '@/assets/images/arrow-down';
import { Box } from '../box';

export function Select({
  label,
  placeholder,
  value,
  modalVisible,
  setModalVisible,
  children,
  modalHeight = 1.75,
}: {
  label: string;
  placeholder: string;
  value?: string;
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  children?: React.ReactNode;
  modalHeight?: number;
}) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        rowGap: 2,
      }}
    >
      <Input
        showSoftInputOnFocus={false}
        onPress={() => {
          setModalVisible(true);
          Keyboard.dismiss();
        }}
        label={label}
        placeholder={placeholder}
        value={value}
      >
        <Box className="bg-white absolute right-0 h-full items-center justify-center rounded-lg">
          <SVGArrowDown
            size={25}
            style={{
              marginRight: '5%',
            }}
          />
        </Box>
      </Input>
      <GestureRecognizer onSwipeDown={() => setModalVisible(false)}>
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="slide"
          transparent
          style={{
            height: '100%',
            borderRadius: 0,
          }}
        >
          <Pressable
            style={{
              flex: modalHeight,
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
            }}
            onPress={() => setModalVisible(false)}
          ></Pressable>
          <View
            style={{
              flex: 1,
              backgroundColor: '#FFFFFF',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
            <View
              style={{
                height: 20,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: 3,
                  width: '50%',
                  backgroundColor: '#E1E1E6',
                  borderRadius: 2,
                }}
              ></View>
            </View>
            <View>{children}</View>
          </View>
        </Modal>
      </GestureRecognizer>
    </View>
  );
}
