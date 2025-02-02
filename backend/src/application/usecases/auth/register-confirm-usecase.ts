import { EmailRepository, StudentRepository } from '@/application/repositories';
import { EmailType, StudentRegistrationStatus } from '@/domain';

export class RegisterConfirmUsecase {
  public static Name = 'RegisterConfirmUsecase' as const;

  constructor(
    private readonly studentRepository: StudentRepository,
    private readonly emailRepository: EmailRepository,
  ) {}

  async execute(
    input: RegisterConfirmUsecase.Input,
  ): Promise<RegisterConfirmUsecase.Output> {
    const registration = input.code.slice(0, 9);

    const studentExists = await this.studentRepository.findBy({
      where: {
        registration,
      },
    });

    if (!studentExists) {
      return {
        message: 'Código inválido',
      };
    }

    const cacheData = await this.emailRepository.get({
      studentId: studentExists.id,
      type: EmailType.REGISTRATION,
    });

    if (!cacheData) {
      return {
        message: 'Seu registro já foi confirmado ou seu código expirou',
      };
    }

    const parsedData = JSON.parse(cacheData.data) as {
      code: string;
    };

    if (parsedData.code !== input.code) {
      return {
        message: 'Código inválido',
      };
    }

    await Promise.all([
      this.studentRepository.update(studentExists.id, {
        status: StudentRegistrationStatus.APPROVED,
      }),

      this.emailRepository.del({
        studentId: studentExists.id,
        type: EmailType.REGISTRATION,
      }),
    ]);

    return {
      message: 'Registro confirmado com sucesso',
    };
  }
}

export namespace RegisterConfirmUsecase {
  export type Input = {
    code: string;
  };

  export type Output = {
    message: string;
  };
}
