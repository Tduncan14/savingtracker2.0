import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'


dotenv.config()

const app = express()



app.use(express.json())
app.use(cors())


app.use('/api/user', userRoute)
app.use('/api/goals')


const port = process.env.PORT || 5000


app.listen(port, () => {
    console.log('you are now listening on this server ')
})