import { ChatRoomRepository } from '@/application/repositories';
import { Validator } from '@/application/services';
import { ChatRoom } from '@/domain';

export class GetAllChatUsecase {
  public static Name = 'GetAllChatUsecase' as const;

  constructor(
    private readonly validator: Validator<GetAllChatUsecase.Input>,
    private readonly chatRoomRepository: ChatRoomRepository,
  ) {}

  async execute(
    input: GetAllChatUsecase.Input,
  ): Promise<GetAllChatUsecase.Output> {
    const validatedInput = await this.validator.validate(input);

    const chatRoom = await this.chatRoomRepository.getAll({
      studentId: validatedInput.studentId,
    });

    return { chats: chatRoom };
  }
}

export namespace GetAllChatUsecase {
  export type Input = {
    studentId: string;
  };

  export type Output = {
    chats: Array<ChatRoom>;
  };
}
