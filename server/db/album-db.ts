import config from './knexfile'
import knex from 'knex'
import { Album, AlbumWithSongs } from '../../common/Album'
import { SongOnAlbum } from '../../common/Song'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

/*
 * albums
 *************************/

export async function getAlbumsWithSongs(
  db = connection
): Promise<AlbumWithSongs> {
  const rows = await db('albums')
    .leftOuterJoin('song_album', 'albums.id', 'song_album.album_id')
    .leftOuterJoin('songs', 'song_album.song_id', 'songs.id')
    .select(
      '*',
      'albums.id AS id',
      'song_title',
      'lyrics',
      'released_as_single',
      'release_date'
    )
    .orderBy('id', 'asc')

  const albumsWithSongs = []
  let last = null

  for (const row of rows) {
    if (last == null || last.id !== row.id) {
      last = {
        id: row.id,
        name: row.album_title,
        songs: [] as SongOnAlbum[],
      }

      const { song_id, song_title, lyrics, released_as_single, producer } = row

      last?.songs.push({
        id: song_id,
        song_title,
        lyrics,
        released_as_single,
        producer,
      })
    }

    albumsWithSongs.push(last)
  }

  return albumsWithSongs
}

export function getAlbum(id: number, db = connection): Promise<Album> {
  return db('albums').select().where('id', id).first()
}
