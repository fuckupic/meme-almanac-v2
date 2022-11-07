import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '../../../libPrisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'GET') {
    const numId = req.query.id

    const memes = await prisma.memes.findUnique({
      where: {
        id: numId,
      },
    })

    res.status(200).json(memes)
  }
}
