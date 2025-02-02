import { ValidationError } from '@/application/error';
import { Validator } from '@/application/services';
import { ChangePasswordUsecase } from '@/application/usecases/auth/forgot-password';
import { z } from 'zod';

export class ChangePasswordUsecaseZodValidator implements Validator<ChangePasswordUsecase.Input> {
  private readonly schema = z.object({
    code: z.string().regex(/\d/g, {
      message: 'Código inválido',
    }).length(4),
    confirmPassword: z.string().min(8).max(255),
    password: z.string().min(8).max(255),
    studentId: z.string().uuid(),
  }).refine((data) => data.password === data.confirmPassword, {
    message: 'Senhas não coincidem',
  });

  async validate(input: any): Promise<ChangePasswordUsecase.Input> {
    const validateResult = await this.schema.safeParseAsync(input);
    if (!validateResult.success) {
      throw new ValidationError(validateResult.error.issues);
    }

    return validateResult.data as ChangePasswordUsecase.Input;
  }
}
