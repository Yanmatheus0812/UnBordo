import { Request, Response } from 'express';

export default function (_request: Request, response: Response) {
  response.status(200).json({ ok: true });
}
