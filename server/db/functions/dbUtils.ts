import { AlbumWithSongs } from '../../../common/Album'

import { getAlbums } from './album-db'
import { getSongsByAlbumId } from './song-db'

export async function getAlbumsWithSongs(): Promise<AlbumWithSongs[]> {
  const albums = await getAlbums()
  const albumsWithSongs = [] as AlbumWithSongs[]

  for (const album of albums) {
    const currentId = Number(album.id)
    const currentSongs = await getSongsByAlbumId(currentId)
    const modAlbum = { ...album, songs: currentSongs }
    albumsWithSongs.push(modAlbum)
  }
  return albumsWithSongs
}
