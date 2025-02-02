import { ConfirmForgotPasswordCodeUsecase } from '@/application/usecases';
import { container } from '@/infra/container';
import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
  const usecase: ConfirmForgotPasswordCodeUsecase = container.get(
    ConfirmForgotPasswordCodeUsecase.Name,
  );
  const output = await usecase.execute({
    registration: req.body.registration,
    code: req.body.code,
  });

  res.status(200).send(output);
}
