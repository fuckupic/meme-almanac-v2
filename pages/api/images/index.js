// Get the 'deepai' package here (Compatible with browser & nodejs):
//     https://www.npmjs.com/package/deepai
// All examples use JS async-await syntax, be sure to call the API inside an async function.
//     Learn more about async-await here: https://javascript.info/async-await

// Example posting a text URL:

const deepai = require('deepai') // OR include deepai.min.js as a script tag in your HTML

deepai.setApiKey('ac5e71f6-5e75-44e7-b465-5b622aa5ea89')(async function () {
  var resp = await deepai.callStandardApi('stable-diffusion', {
    text: 'YOUR_TEXT_URL',
  })
  console.log(resp)
})()
