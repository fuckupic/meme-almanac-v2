import { NextApiResponse, NextApiRequest } from 'next'
import prisma from '../../libPrisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === 'POST') {
    const { enteredName, enteredDescription, enteredDate, enteredImage } =
      req.body

    try {
      const newMeme = await prisma.memes.create({
        data: {
          name: enteredName,
          description: enteredDescription,
          date: enteredDate,
          image: enteredImage != null ? enteredImage : undefined,
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
  if (req.method === 'PUT') {
    const numId = req.query.id
    const newId = Number(numId)

    const { enteredName, enteredDescription, enteredDate, enteredImage } =
      req.body

    const meme = await prisma.memes.update({
      where: {
        id: newId,
      },
      data: {
        name: enteredName != null ? enteredName : undefined,
        description:
          enteredDescription != null ? enteredDescription : undefined,
        image: enteredImage != null ? enteredImage : undefined,
        date: enteredDate != null ? enteredDate : undefined,
      },
    })

    res.status(201).json({ message: 'Updated' })
  }
  if (req.method === 'DELETE') {
    const numId = req.query.id
    const newId = Number(numId)

    const memes = await prisma.memes.delete({
      where: {
        id: newId,
      },
    })

    res.status(200).json(memes)
  }
}
