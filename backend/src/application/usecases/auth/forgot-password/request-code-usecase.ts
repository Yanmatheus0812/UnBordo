import { NotFoundError } from '@/application/error';
import { EmailRepository, StudentRepository } from '@/application/repositories';
import { DispatchEmailService, Validator } from '@/application/services';
import { EmailType } from '@/domain';

export class RequestForgotPasswordCodeUsecase {
  static readonly Name = 'RequestForgotPasswordCodeUsecase' as const;

  constructor(
    private readonly validator: Validator<RequestForgotPasswordCodeUsecase.Input>,
    private readonly studentRepository: StudentRepository,
    private readonly dispatchEmailService: DispatchEmailService,
    private readonly emailRepository: EmailRepository,
  ) {}

  async execute(
    input: RequestForgotPasswordCodeUsecase.Input,
  ): Promise<RequestForgotPasswordCodeUsecase.Output> {
    const validatedInput = await this.validator.validate(input);

    const student = await this.studentRepository.findBy({
      where: {
        registration: validatedInput.registration,
      },
    });

    if (!student) {
      throw new NotFoundError('Estudante não encontrado', 'STUDENT');
    }

    const code = this.generateCode();

    await Promise.all([
      this.dispatchEmailService.dispatch({
        data: {
          studentId: student.id,
          type: EmailType.FORGOT_PASSWORD,
          data: {
            code,
          },
        },
      }),
      this.emailRepository.create({
        studentId: student.id,
        email: {
          data: JSON.stringify({
            code,
          }),
          type: EmailType.FORGOT_PASSWORD,
          to: student.email,
        },
      }),
    ]);
  }

  private generateCode(): string {
    const date = new Date().getTime();

    return date.toString().slice(-4);
  }
}

export namespace RequestForgotPasswordCodeUsecase {
  export type Input = {
    registration: string;
  };

  export type Output = void;
}
