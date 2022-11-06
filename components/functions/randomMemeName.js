import React from 'react'

const memeNames = [
  'memoušek',
  'memíček',
  'memínek',
  'memrák',
  'mem',
  'memík',
  'memza',
  'memzík',
  'memzák',
  'memča',
  'memula',
]

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

export default function randomMemeName() {
  const meme = memeNames[getRandomInt(memeNames.length)]
  return meme
}
