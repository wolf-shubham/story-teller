const express = require('express')
const dotenv = require('dotenv')
const { databaseConnection } = require('./database/db')
const userRoutes = require('./routes/userRoutes')
const postRoutes = require('./routes/postRoutes')
const path = require('path')

const app = express()
app.use(express.json())
dotenv.config()
databaseConnection()
const PORT = process.env.PORT || 5000


app.use('/user', userRoutes)
app.use('/post', postRoutes)

//-----------------Deployment-----------------
const __dirname1 = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname1, '/frontend/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname1, 'frontend', 'build', 'index.html'))
    })
} else {
    app.get('/', (req, res) => {
        res.send('API is running')
    })
}
//-----------------Deployment-----------------


app.listen(PORT, () => {
    console.log(`server connected on PORT : ${PORT}`)
})