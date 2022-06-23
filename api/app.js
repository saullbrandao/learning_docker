const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json([
    {
      "id": "1",
      "title": "Title 1",
    },
    {
      "id": "2",
      "title": "Test 2",
    },
    {
      "id": "3",
      "title": "Test 3",
    }
  ])
})

app.listen(4000, () => {
  console.log('listening for requests on port 4000')
})