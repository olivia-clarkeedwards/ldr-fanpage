import express from 'express'
import { getUsers } from '../db/user-db'

const router = express.Router()

router.get('/', (_, res) => {
  getUsers()
    .then((users) => {
      if (users.length !== 0) res.json(users)
      else throw Error('No users found.')
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
