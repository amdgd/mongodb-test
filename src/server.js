import express from 'express'
import cors from 'cors'


export const app = express()
app.disable('x-powered-by')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.send('Hello Dataisgood!'))


export const start = async () => {
  app.listen(80, () => {
    console.log('server is running')
  })
}
