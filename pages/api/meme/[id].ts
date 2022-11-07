import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '../../../libPrisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const numId = req.query.id
  const newId = Number(numId)

  const memes = await prisma.memes.findUnique({
    where: {
      id: newId,
    },
  })

  res.status(200).json(memes)
}
