import { type Request, type Response } from 'express';

export const healthCheck = async (req: Request, res: Response) => {
  res.send('API OK!')
}
