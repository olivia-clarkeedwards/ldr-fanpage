import { AlbumAction } from '../actions/albums'
import { Album } from '../../common/Album'

const initialState = [] as Album[]

export default function reducer(
  state = initialState,
  { type, payload }: AlbumAction
) {
  switch (type) {
    case 'RECEIVE_ALBUMS': {
      return payload
    }
    default:
      return state
  }
}
