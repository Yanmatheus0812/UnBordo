import { GetAllChatUsecase } from '@/application/usecases';
import { container } from '@/infra/container';
import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
  const usecase: GetAllChatUsecase = container.get(GetAllChatUsecase.Name);

  const output = await usecase.execute({
    studentId: req.user.id,
  });

  res.json(output);
}
