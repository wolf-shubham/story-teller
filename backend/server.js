const express = require('express')
const dotenv = require('dotenv')
const { databaseConnection } = require('./database/db')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')

const app = express()
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT || 5000


app.use('/user', userRoutes)
app.use('/post', postRoutes)

databaseConnection()
app.listen(PORT, () => {
    console.log(`server connected on PORT : ${PORT}`)
})