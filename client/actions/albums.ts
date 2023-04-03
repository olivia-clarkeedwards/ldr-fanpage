import { Album } from '../../common/Album'

export function receiveAlbums(albums: Album[]): AlbumAction {
  return { type: 'RECEIVE_ALBUMS', payload: albums }
}

export interface AlbumAction {
  type: 'RECEIVE_ALBUMS'
  payload: Album[]
}
