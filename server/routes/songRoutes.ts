import express from 'express'
import { getSongsByAlbumId } from '../db/functions/song-db'

const router = express.Router()

//get songs by album id
router.get('/:albumId', (req, res) => {
  getSongsByAlbumId(Number(req.params.albumId))
    .then((songs) => {
      if (songs.length !== 0) res.json(songs)
      else throw Error('Invalid song ID.')
    })
    .catch((err) => res.status(400).send(err.message))
})

export default router
