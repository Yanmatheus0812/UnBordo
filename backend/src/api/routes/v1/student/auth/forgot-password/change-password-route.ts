import { ChangePasswordUsecase } from '@/application/usecases';
import { container } from '@/infra/container';
import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
  const usecase: ChangePasswordUsecase = container.get(
    ChangePasswordUsecase.Name,
  );
  const output = await usecase.execute({
    studentId: req.body.studentId,
    code: req.body.code,
    confirmPassword: req.body.confirmPassword,
    password: req.body.password,
  });

  res.status(200).send(output);
}
