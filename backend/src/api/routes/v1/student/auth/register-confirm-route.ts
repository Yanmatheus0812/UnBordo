import { RegisterConfirmUsecase } from '@/application/usecases';
import { container } from '@/infra/container';
import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
  const usecase: RegisterConfirmUsecase = container.get(
    RegisterConfirmUsecase.Name,
  );
  const output = await usecase.execute({
    code: req.params.code,
  });

  res.status(200).send(output.message);
}
