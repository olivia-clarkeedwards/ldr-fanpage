import express from 'express'
import { getUsers } from '../db/functions/user-db'
import { User } from '../../common/User'

const router = express.Router()

router.get('/', (_, res) => {
  getUsers()
    .then((users: User[]) => {
      if (users.length !== 0) res.json(users)
      else throw Error('No users found.')
    })
    .catch((err: Error) => {
      res.status(500).send(err.message)
    })
})

export default router
