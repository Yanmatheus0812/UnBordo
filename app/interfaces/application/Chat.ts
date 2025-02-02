export const chatRoomStatuses = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
}

export type IChatRoomStatus = keyof typeof chatRoomStatuses;

export type IChatRoom = {
  id: string;
  studentId: string;
  tutorId: string;
  subjectId: string;
  status: IChatRoomStatus;
  messages: Array<IChatMessage>;
}

export type IChatMessage = {
  id: string;
  senderId: string;
  chatId: string;
  message: string;
};