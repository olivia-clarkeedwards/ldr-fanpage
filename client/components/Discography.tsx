import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchAlbums } from '../api/albumsApi'
import { receiveAlbums, thunkGetAlbums } from '../actions/albums'
import AlbumTile from './AlbumTile'

function Discography() {
  const dispatch = useAppDispatch()
  const albums = useAppSelector((state) => state.album)

  useEffect(() => {
    dispatch(thunkGetAlbums())
  }, [])

  return (
    <ul className="flex flex-wrap justify-center bg-red-900 ">
      {albums.map((album) => (
        <Link to={`/albums/${album.id}`} key={album.id}>
          <AlbumTile album={album} />
        </Link>
      ))}
    </ul>
  )
}

export default Discography
