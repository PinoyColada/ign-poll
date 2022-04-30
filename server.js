const express = require('express')
const cors = require('cors')

const app = express()


const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/client/build`))
const AppRouter = require('./routes/AppRouter')

app.use('/api', AppRouter)

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))