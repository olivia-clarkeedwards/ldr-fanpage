import express from 'express'
import { getAlbumsWithSongs } from '../db/functions/dbUtils'
import { AlbumWithSongs } from '../../common/Album'

const router = express.Router()

router.get('/', (req, res) => {
  getAlbumsWithSongs()
    .then((albums: AlbumWithSongs[]) => {
      if (albums.length !== 0) res.json(albums)
      else throw Error('No albums found.')
    })
    .catch((err) => res.status(500).send(err.message))
})

export default router
