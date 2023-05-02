import * as express from 'express'
import { getEventsByCareRecipientId } from '../db/queries'
import { pool } from '../db/connect'

export const EventController = express.Router()

EventController.get('/events', (req, res) => {
  const careRecipientId = req.query.careRecipientId
  if (!careRecipientId) res.status(400).send('No care recipient id given')
  getEventsByCareRecipientId(pool, <string>careRecipientId)
    .then((events) => {
      res.status(200).send(events)
    })
    .catch((err) => {
      console.error('Error: ' + err)
      res.status(500).send(err)
    })
})
