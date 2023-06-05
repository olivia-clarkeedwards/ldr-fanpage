import config from './knexfile'
import knex from 'knex'
import { Song } from '../../common/Song'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

/*************************
 ********* songs *********
 *************************/

export function getSongsByAlbumId(
  albumId: number,
  db = connection
): Promise<Song[]> {
  return db('albums')
    .select(
      'song_album.id AS song_id',
      'songs.song_title',
      'lyrics',
      'songs.released_as_single'
    )
    .where('albums.id', albumId)
    .join('song_album', 'albums.id', 'song_album.album_id')
    .join('songs', 'song_album.song_id', 'songs.id')
}

export function getSong(id: number, db = connection): Promise<Song> {
  return db('albums').select().where('id', id).first()
}
