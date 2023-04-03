import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchAlbums } from '../api/albumsApi'
import { receiveAlbums } from '../actions/albums'
import AlbumDetails from './AlbumTile'

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
        <AlbumDetails key={album.id} album={album} />
      ))}
    </ul>
  )
}

export default Discography
