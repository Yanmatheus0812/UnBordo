export const ChatRoomStatuses = {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
} as const;

export type ChatRoomStatus = keyof typeof ChatRoomStatuses;

export type ChatRoom = {
  id: string;
  studentId: string;
  questionId: string;
  status: ChatRoomStatus;
  tutorId: string;
  updatedAt: Date;
  createdAt: Date;
};
