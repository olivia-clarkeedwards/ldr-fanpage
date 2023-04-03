import config from './knexfile'
import knex from 'knex'
import { Album, AlbumWithSongId } from '../../common/Album'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

/*
 * albums
 *************************/

export function getAlbums(db = connection): Promise<AlbumWithSongId[]> {
  return db('albums')
    .select(
      'albums.id AS album_id',
      'album_title',
      'number_of_tracks AS numberOfTracks',
      'duration_mins AS duration',
      'artwork',
      'song_album.id AS song_id',
      'songs.song_title',
      'songs.released_as_single'
    )
    .join('song_album', 'albums.id', 'song_album.album_id')
    .join('songs', 'song_album.song_id', 'songs.id')
}

export function getAlbum(id: number, db = connection): Promise<Album> {
  return db('albums').select().where('id', id).first()
}

//https://lornajane.net/posts/2011/inner-vs-outer-joins-on-a-many-to-many-relationship#:~:text=To%20get%20all%20of%20the,join%20%E2%80%93%20more%20on%20that%20later.&text=And%20there%20you%20have%20it,relationship%20join%20across%20three%20tables.
