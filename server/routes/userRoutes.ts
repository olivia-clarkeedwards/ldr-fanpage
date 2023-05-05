import express from 'express'
import { getUsers } from '../db/user-db'

const router = express.Router()

router.get('/', (req, res) => {
  getUsers()
    .then((users) => {
      if (users.length !== 0) res.json(users)
      else throw Error('No users found.')
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

export default router
