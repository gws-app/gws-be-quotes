import express from 'express';
import { config } from './config';
import cors from 'cors';
import router from './routes';
const app = express()

const port = config.port

app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`API RUN in ${port}`)
})
