import { Album } from '../../common/Album'

interface Props {
  album: Album
}

function AlbumTile({ album }: Props) {
  return (
    <img
      className="p-5  min-w-md md:max-w-md sm:min-w-0 hover:opacity-70 hover:p-4"
      // style={{ maxWidth: '500px' }}
      src={`/images/${album.artwork}`}
      alt={`Album artwork for ${album.album_title}`}
    />
  )
}

export default AlbumTile
