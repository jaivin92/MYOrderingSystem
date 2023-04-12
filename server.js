import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import 'express-async-errors'

import connectDB from './db/connect.js'

import basicRoute  from './routes/AuthControlRoute.js'

import errorHandlerMiddleware from './middleware/error-handler.js'

const port = process.env.PORT || 4000

app.use(express.json())
app.get('/', (req,res) =>{
    res.send({message:'Welcome'})
})

// api 
app.use('/api/v1',basicRoute)

// error handler
app.use(errorHandlerMiddleware)

// start app server
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen (port, ()=>{
            console.log(`Server run on ${port}.` )
        })
    } catch (error) {
        console.log(error)        
    }
}

start()