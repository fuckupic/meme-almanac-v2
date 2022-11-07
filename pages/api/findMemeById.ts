import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '../../libPrisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id } = req.body
  const memes = await prisma.memes.findUnique({
    where: {
      id: id,
    },
  })

  res.status(200).json(memes)
}
