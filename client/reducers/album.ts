import { AlbumAction } from '../actions/albums'
import { AlbumWithSongs } from '../../common/Album'

const initialState = [] as AlbumWithSongs[]

export default function reducer(
  state = initialState,
  { type, payload }: AlbumAction
): AlbumWithSongs[] {
  switch (type) {
    case 'RECEIVE_ALBUMS': {
      return payload
    }
    default:
      return state
  }
}
