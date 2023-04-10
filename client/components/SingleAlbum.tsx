import { useEffect } from 'react'
import { useParams } from 'react-router'
import { thunkGetAlbums } from '../actions/albums'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import Songs from './Songs'

function SingleAlbum() {
  const { id } = useParams()
  const albums = useAppSelector((state) => state.album)
  const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(thunkGetAlbums())
  // })

  return (
    <div className="grid h-screen place-items-center">
      <div className="flex max-w-sm flex-col m-10">
        <img
          // src={`/images/${album?.artwork}`}
          alt="Born To Die album cover artwork"
        ></img>
        <h3 className="text-3xl font-bold dark:text-white">Born To Die</h3>
        <Songs />
      </div>
    </div>
  )
}
export default SingleAlbum
