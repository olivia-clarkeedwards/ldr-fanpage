import type { ThunkAction } from '../store'
import { AlbumWithSongs } from '../../common/Album'
import { fetchAlbums } from '../api/albumsApi'

export interface AlbumAction {
  type: 'RECEIVE_ALBUMS'
  payload: AlbumWithSongs[]
}

export function receiveAlbums(albums: AlbumWithSongs[]): AlbumAction {
  return { type: 'RECEIVE_ALBUMS', payload: albums }
}

export function thunkGetAlbums(): ThunkAction {
  return async (dispatch) => {
    fetchAlbums()
      .then((albums) => dispatch(receiveAlbums(albums)))
      .catch((err) => err)
  }
}
