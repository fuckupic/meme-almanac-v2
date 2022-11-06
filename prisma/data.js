const { Prisma } = require('@prisma/client')

const memes = [
  {
    name: 'Hats',
    description: 'Things you can wear on your head',
    date: '2020-10-12',
  },
]

module.exports = {
  memes,
}
