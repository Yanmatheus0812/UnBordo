import { RequestForgotPasswordCodeUsecase } from '@/application/usecases';
import { container } from '@/infra/container';
import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
  const usecase: RequestForgotPasswordCodeUsecase = container.get(
    RequestForgotPasswordCodeUsecase.Name,
  );
  const output = await usecase.execute({
    registration: req.body.registration,
  });

  res.status(200).send(output);
}
