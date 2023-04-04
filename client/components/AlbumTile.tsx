import { Album } from '../../common/Album'

interface Props {
  album: Album
}

function AlbumTile({ album }: Props) {
  return (
    <img
      className="p-5  min-w-md md:max-w-md sm:min-w-0"
      // style={{ maxWidth: '500px' }}
      src={`/images/${album.artwork}`}
      alt={`Album artwork for ${album.album_title}`}
    />
  )
}

export default AlbumTile
