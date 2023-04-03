import express from 'express'
import { getUsers } from '../db/user-db'

const router = express.Router()

router.get('/', (req, res) => {
  getUsers()
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
