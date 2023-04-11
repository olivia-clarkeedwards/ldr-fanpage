import { Album } from '../../common/Album'

interface Props {
  album: Album
}

function AlbumTile({ album }: Props) {
  return (
    <img
      className="rounded-3xl overflow-hidden p-5 min-w-md md:max-w-md sm:min-w-0 hover:opacity-70 hover:p-4"
      src={`/images/${album.artwork}`}
      alt={`Album artwork for ${album.album_title}`}
    />
  )
}

export default AlbumTile
