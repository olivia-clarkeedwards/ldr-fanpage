import request from 'superagent'
import { AlbumWithSongs } from '../../common/Album'

const albumAPI = '/api/v1/albums'

export async function fetchAlbums(): Promise<AlbumWithSongs[]> {
  return request.get(`${albumAPI}/`).then((albums) => albums.body)
}
