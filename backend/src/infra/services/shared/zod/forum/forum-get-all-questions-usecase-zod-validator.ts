import { ValidationError } from '@/application/error';
import { Validator } from '@/application/services';
import { GetAllQuestionsUsecase, GetQuestionUsecase } from '@/application/usecases';
import { QuestionDifficulty, QuestionUrgency } from '@/domain';
import { z } from 'zod';

export class ForumGetAllQuestionsUsecaseZodValidator implements Validator<GetAllQuestionsUsecase.Input> {
  private readonly filter = z
    .object({
      urgency: z.nativeEnum(QuestionUrgency).optional(),
      difficulty: z.nativeEnum(QuestionDifficulty).optional(),
    });

  private readonly schema = z
    .object({
      filter: this.filter.partial(),
    });

  async validate(input: any): Promise<GetAllQuestionsUsecase.Input> {
    const validateResult = await this.schema.safeParseAsync(input);

    if (!(validateResult).success) {
      throw new ValidationError(validateResult.error.issues);
    }
    return validateResult.data as GetAllQuestionsUsecase.Input;
  }
}
