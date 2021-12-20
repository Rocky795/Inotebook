const { connect } = require('mongoose')
const connectToMongo=require('./db')

connectToMongo();

const express = require('express')
const app = express()
const port = 3001


app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/auth', require('./routes/auth'))


app.get('/', (req, res) => {
  res.send('Hello World!');
}) 
 



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

