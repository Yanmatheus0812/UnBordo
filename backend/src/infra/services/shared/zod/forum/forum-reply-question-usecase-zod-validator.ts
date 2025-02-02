import { ValidationError } from '@/application/error';
import { Validator } from '@/application/services';
import { ReplyQuestionUsecase } from '@/application/usecases';
import { z } from 'zod';

export class ForumReplyQuestionUsecaseZodValidator implements Validator<ReplyQuestionUsecase.Input> {
  private readonly schema = z
    .object({
      questionId: z.string().uuid(),
      tutorId: z.string().uuid(),
    });

  async validate(input: any): Promise<ReplyQuestionUsecase.Input> {
    const validateResult = await this.schema.safeParseAsync(input);

    if (!(validateResult).success) {
      throw new ValidationError(validateResult.error.issues);
    }

    return validateResult.data as ReplyQuestionUsecase.Input;
  }
}
