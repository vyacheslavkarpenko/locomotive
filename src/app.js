import express from 'express'
import cors from 'cors'
import { routes } from './core/common/routes.js'
import { mongoose } from './db/mongoose.js'

const app = express()
const port = 3100

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded



app.use(cors())
app.use('/', cors(corsOptions), routes)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


