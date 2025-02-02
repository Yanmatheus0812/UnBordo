import { ReplyQuestionUsecase } from '@/application/usecases';
import { container } from '@/infra/container';
import { Request, Response } from 'express';

export default async function (req: Request, res: Response) {
  const usecase: ReplyQuestionUsecase = container.get(ReplyQuestionUsecase.Name);

  const output = await usecase.execute({
    questionId: req.params.id,
    tutorId: req.user.id,
  });

  res.json(output);
}
