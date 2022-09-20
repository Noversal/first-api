import express from 'express'
import multer from 'multer'
import cors from 'cors'
import fs from 'fs'
import { getURL, uploadFile } from './firebase/storage.js'

const storage = multer.memoryStorage()

const upload = multer({ storage })


const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
  const info = await getURL()
  const img = await Promise.all(info)
  console.log(img)
  res.send({ img })
})

app.post('/imagen', upload.single('imagen'), async (req, res) => {
  const body = req.body
  const imagen = req.file
  const data = await uploadFile(imagen)

  console.log(data)
  res.send(data)
})

app.get('/cartas', (req, res) => {
  const cartas = fs.readFileSync('./cartas.json', 'utf-8')
  res.send(JSON.parse(cartas))
})


function init() {
  app.listen(port)
  console.log(`Escuchando en el puerto ${port}`)
}

init()