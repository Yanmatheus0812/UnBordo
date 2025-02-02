import { ValidationError } from '@/application/error';
import { Validator } from '@/application/services';
import { ConfirmForgotPasswordCodeUsecase } from '@/application/usecases/auth/forgot-password';
import { z } from 'zod';
import { validateStudentRegistration } from '../../helper/registration';

export class ConfirmForgotPasswordCodeUsecaseZodValidator implements Validator<ConfirmForgotPasswordCodeUsecase.Input> {
  private readonly schema = z.object({
    registration: validateStudentRegistration(z.string().length(9)),
    code: z.string().regex(/\d/g, {
      message: 'Invalid code',
    }).length(4),
  });

  async validate(input: any): Promise<ConfirmForgotPasswordCodeUsecase.Input> {
    const validateResult = await this.schema.safeParseAsync(input);
    if (!validateResult.success) {
      throw new ValidationError(validateResult.error.issues);
    }

    return validateResult.data as ConfirmForgotPasswordCodeUsecase.Input;
  }
}
