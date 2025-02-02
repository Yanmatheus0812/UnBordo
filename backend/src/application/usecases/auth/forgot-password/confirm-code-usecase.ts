import { NotFoundError } from '@/application/error';
import {
  EmailRepository,
  PasswordRecoveryRepository,
  StudentRepository,
} from '@/application/repositories';
import { Validator } from '@/application/services';
import { EmailType } from '@/domain';

export class ConfirmForgotPasswordCodeUsecase {
  static readonly Name = 'ConfirmForgotPasswordCodeUsecase' as const;

  constructor(
    private readonly validator: Validator<ConfirmForgotPasswordCodeUsecase.Input>,
    private readonly studentRepository: StudentRepository,
    private readonly emailRepository: EmailRepository,
    private readonly passwordRecoveryRepository: PasswordRecoveryRepository,
  ) {}

  async execute(
    input: ConfirmForgotPasswordCodeUsecase.Input,
  ): Promise<ConfirmForgotPasswordCodeUsecase.Output> {
    const validatedInput = await this.validator.validate(input);

    const student = await this.studentRepository.findBy({
      where: {
        registration: validatedInput.registration,
      },
    });

    if (!student) {
      throw new NotFoundError('Estudante não encontrado', 'STUDENT');
    }

    const cachedEmail = await this.emailRepository.get({
      studentId: student.id,
      type: EmailType.FORGOT_PASSWORD,
    });

    if (!cachedEmail) {
      throw new NotFoundError('Código expirado', 'STUDENT');
    }

    const parsedData = JSON.parse(cachedEmail.data) as {
      code: string;
    };

    if (parsedData.code !== validatedInput.code) {
      throw new NotFoundError('Código inválido', 'STUDENT');
    }

    await this.emailRepository.del({
      studentId: student.id,
      type: EmailType.FORGOT_PASSWORD,
    });

    await this.passwordRecoveryRepository.create({
      studentId: student.id,
      code: parsedData.code,
    });

    return {
      studentId: student.id,
      date: new Date().getTime(),
    };
  }
}

export namespace ConfirmForgotPasswordCodeUsecase {
  export type Input = {
    registration: string;
    code: string;
  };

  export type Output = {
    studentId: string;
    date: number;
  };
}
