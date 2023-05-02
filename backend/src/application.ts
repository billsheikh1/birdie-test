import * as express from 'express'
import { EventController } from './controllers'

const app = express()

app.use(EventController)

export default app
