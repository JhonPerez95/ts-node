import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.json({ success: 'Success Route !' })
})
app.listen(3030, () => {
  console.log('server listening on port 3030')
})
