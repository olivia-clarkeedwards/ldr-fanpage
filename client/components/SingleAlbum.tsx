import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useAppSelector } from '../hooks/redux'
import Songs from './Songs'
import { AlbumWithSongs } from '../../common/Album'

function SingleAlbum() {
  const { id } = useParams()
  const albums = useAppSelector((state) => state.albums)
  const [currentAlbum, setCurrentAlbum] = useState({} as AlbumWithSongs)

  useEffect(() => {
    for (const album of albums) {
      if (album && album.id === id) {
        setCurrentAlbum(album)
      }
    }
  }, [])

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex max-w-sm flex-col m-10">
        <img
          src={`/images/${currentAlbum.artwork}`}
          alt={`${currentAlbum.album_title} album cover artwork`}
        ></img>
        <h3 className="text-3xl font-bold dark:text-white">Born To Die</h3>
        <Songs />
      </div>
    </div>
  )
}
export default SingleAlbum
