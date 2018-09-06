const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.resolve('./dist')))

app.listen(3000, () => {
  console.log('app运行在 http://localhost:3000')
})