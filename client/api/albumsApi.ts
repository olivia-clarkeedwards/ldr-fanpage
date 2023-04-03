import request from 'superagent'
import { Album } from '../../common/Album'

const albumAPI = '/api/v1/albums'

export function fetchAlbums(): Promise<Album[]> {
  return request
    .get(`${albumAPI}/`)
    .then((albums) => albums.body)
    .catch((err) => console.log(err.message))
}
