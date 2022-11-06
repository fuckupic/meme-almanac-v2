import React, { useState } from 'react'
import Axios from 'axios'
import getBase64Image from '../components/functions/getBaseImage'

const cors = require('cors')
var XMLHttpRequest = require('xhr2')
cors()

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState()
  const [isSelected, setIsSelected] = useState()
  const [isFilePicked, setIsFilePicked] = useState(false)

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0])
    setIsSelected(true)
  }

  function toDataURL(url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.onload = function () {
      var reader = new FileReader()
      reader.onloadend = function () {
        callback(reader.result)
      }
      reader.readAsDataURL(xhr.response)
    }
    xhr.open('GET', url)
    xhr.responseType = 'blob'
    xhr.send()
  }

  const imageUrl = toDataURL(
    'https://api.deepai.org/job-view-file/747c7735-37a7-40fd-ae12-c1d99fce7c25/outputs/output.jpg',
    function (dataUrl) {
      return dataUrl
    }
  )

  console.log(imageUrl)

  const uploadImage = () => {
    const formData = new FormData()
    formData.append('file', bannerImage)
    formData.append('upload_preset', 'meme-almanac')

    Axios.post(
      'https://api.cloudinary.com/v1_1/dxdjkofgb/image/upload',
      formData
    ).then((response) => {
      console.log(response)
    })
  }

  return (
    <div>
      <div>
        <button onClick={uploadImage}>Submit</button>
        {toDataURL(
          'https://api.deepai.org/job-view-file/36a93ec5-9bb6-47ac-9b6b-f2687e4b1ec4/outputs/output.jpg',
          function (dataUrl) {
            return <img src={'data:image/png;base64,' + dataUrl} alt="" />
          }
        )}
      </div>
    </div>
  )
}

export default FileUploadPage
