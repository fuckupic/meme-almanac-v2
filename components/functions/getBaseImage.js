import React from 'react'
import { useState } from 'react'

const deepai = require('deepai')

const handleImageGeneration = (param) => {
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  deepai.setApiKey('ac5e71f6-5e75-44e7-b465-5b622aa5ea89')

  const fetchImage = async (image) => {
    try {
      setIsLoading(true)
      const res = await deepai.callStandardApi('stable-diffusion', {
        text: image,
        grid_size: '1',
      })
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchImage(param)
  }, [param])

  return response, loading, error,
  fetchImage: image => fetchImage(image)
}
