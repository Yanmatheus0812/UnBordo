import { ValidationError } from '@/application/error';
import { Validator } from '@/application/services';
import { GetAllChatUsecase } from '@/application/usecases';
import { z } from 'zod';

export class ForumGetAllChatUsecaseZodValidator implements Validator<GetAllChatUsecase.Input> {
  private readonly schema = z
    .object({
      studentId: z.string().uuid(),
    });

  async validate(input: any): Promise<GetAllChatUsecase.Input> {
    const validateResult = await this.schema.safeParseAsync(input);

    if (!(validateResult).success) {
      throw new ValidationError(validateResult.error.issues);
    }

    return validateResult.data as GetAllChatUsecase.Input;
  }
}
