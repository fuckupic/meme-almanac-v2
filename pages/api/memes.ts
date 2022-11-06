import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '../../libPrisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const { enteredName, enteredDescription, enteredDate } = req.body

    const str = enteredDate

    const [year, month, day] = str.split('-')

    const date = new Date(+year, +month - 1, +day)

    try {
      const newMeme = await prisma.memes.create({
        data: {
          name: enteredName,
          description: enteredDescription,
          date: date,
        },
      })
      console.log('Added category data')
      res.status(200).json({ newMeme })
    } catch (e) {
      console.log('Error has happened')
      console.error(e)
      process.exit(1)
    } finally {
      await prisma.$disconnect()
    }
  }
  if (req.method === 'GET') {
    const { enteredName, enteredDate } = req.body
    if (enteredName != undefined || enteredDate != undefined) {
      const memes = await prisma.memes.findMany({
        where: {
          name: {
            startsWith: enteredName,
          },
          date: {
            contains: enteredDate,
          },
        },
      })
      res.status(200).json({ memes })
    } else {
      const memes = await prisma.memes.findMany()

      res.status(200).json(memes)
    }
  }
}
