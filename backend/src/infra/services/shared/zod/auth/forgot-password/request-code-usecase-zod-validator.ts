import { ValidationError } from '@/application/error';
import { Validator } from '@/application/services';
import { RequestForgotPasswordCodeUsecase } from '@/application/usecases/auth/forgot-password';
import { z } from 'zod';
import { validateStudentRegistration } from '../../helper/registration';

export class RequestForgotPasswordCodeUsecaseZodValidator implements Validator<RequestForgotPasswordCodeUsecase.Input> {
  private readonly schema = z.object({
    registration: validateStudentRegistration(z.string().length(9)),
  });

  async validate(input: any): Promise<RequestForgotPasswordCodeUsecase.Input> {
    const validateResult = await this.schema.safeParseAsync(input);
    if (!validateResult.success) {
      throw new ValidationError(validateResult.error.issues);
    }

    return validateResult.data as RequestForgotPasswordCodeUsecase.Input;
  }
}
