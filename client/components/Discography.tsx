import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchAlbums } from '../api/albumsApi'
import { receiveAlbums } from '../actions/albums'
import AlbumTile from './AlbumTile'

function Discography() {
  const dispatch = useAppDispatch()
  const albums = useAppSelector((state) => state.album)

  useEffect(() => {
    fetchAlbums()
      .then((albums) => {
        dispatch(receiveAlbums(albums))
      })
      .catch((err) => console.log(err.message))
  })

  return (
    <ul className="flex flex-wrap justify-center">
      {albums.map((album) => (
        <Link to="/albums/2" key={album.id}>
          <AlbumTile album={album} />
        </Link>
      ))}
    </ul>
  )
}

export default Discography
