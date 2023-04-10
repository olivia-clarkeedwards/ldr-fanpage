import type { ThunkAction } from '../store'
import { Album } from '../../common/Album'
import { fetchAlbums } from '../api/albumsApi'

export interface AlbumAction {
  type: 'RECEIVE_ALBUMS'
  payload: Album[]
}

export function receiveAlbums(albums: Album[]): AlbumAction {
  return { type: 'RECEIVE_ALBUMS', payload: albums }
}

export function thunkGetAlbums(): ThunkAction {
  return async (dispatch) => {
    fetchAlbums()
      .then((albums) => dispatch(receiveAlbums(albums)))
      .catch((err) => console.log(err.message))
  }
}
