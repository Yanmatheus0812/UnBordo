import { NotFoundError, UnauthenticatedError } from '@/application/error';
import {
  PasswordRecoveryRepository,
  StudentRepository,
} from '@/application/repositories';
import { PasswordHash, Validator } from '@/application/services';

export class ChangePasswordUsecase {
  static readonly Name = 'ChangePasswordUsecase' as const;

  constructor(
    private readonly validator: Validator<ChangePasswordUsecase.Input>,
    private readonly studentRepository: StudentRepository,
    private readonly passwordHashService: PasswordHash,
    private readonly passwordRecoveryRepository: PasswordRecoveryRepository,
  ) {}

  async execute(
    input: ChangePasswordUsecase.Input,
  ): Promise<ChangePasswordUsecase.Output> {
    const validatedInput = await this.validator.validate(input);

    const student = await this.studentRepository.findBy({
      where: {
        id: validatedInput.studentId,
      },
    });

    if (!student) {
      throw new NotFoundError('Estudante não encontrado', 'STUDENT');
    }

    const validatedCode = await this.passwordRecoveryRepository.get({
      studentId: student.id,
      code: validatedInput.code,
    });

    if (!validatedCode || validatedCode.code !== validatedInput.code) {
      throw new NotFoundError('Operação expirada ou inválida, tente novamente', 'STUDENT');
    }

    await Promise.all([
      this.passwordRecoveryRepository.del({
        code: validatedInput.code,
        studentId: student.id,
      }),
      this.studentRepository.update(student.id, {
        password: await this.passwordHashService.hash(validatedInput.password),
      }),
    ]);
  }
}

export namespace ChangePasswordUsecase {
  export type Input = {
    studentId: string;
    code: string;
    password: string;
    confirmPassword: string;
  };

  export type Output = void;
}
