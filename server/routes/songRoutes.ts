import express from 'express'
import { getSongsByAlbumId } from '../db/song-db'

const router = express.Router()

//get songs by album id
router.get('/:albumId', (req, res) => {
  getSongsByAlbumId(Number(req.params.albumId))
    .then((songs) => {
      res.json(songs)
    })
    .catch((err) => console.log(err.message))
})

export default router
