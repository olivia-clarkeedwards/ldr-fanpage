import express from 'express'
import { getAlbumsWithSongs } from '../db/dbUtils'

const router = express.Router()

router.get('/', (req, res) => {
  getAlbumsWithSongs()
    .then((albums) => {
      res.json(albums)
    })
    .catch((err) => console.log(err.message))
})

// router.get('/:id', (req, res) => {
//   getAlbum(Number(req.params.id))
//     .then((album) => {
//       res.json(album)
//     })
//     .catch((err) => console.log(err.message))
// })

export default router
