const { PrismaClient } = require('@prisma/client')
const { memes } = require('./data.js')
const prisma = new PrismaClient()

const load = async () => {
  try {
    await prisma.memes.deleteMany()
    console.log('Deleted records in memes table')

    await prisma.$queryRaw`ALTER TABLE memes AUTO_INCREMENT = 1`
    console.log('reset memes auto increment to 1')

    await prisma.memes.createMany({
      data: memes,
    })
    console.log('Added category data')
  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
