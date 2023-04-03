import config from './knexfile'
import knex from 'knex'
import { Song } from '../../common/Song'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

/*
 * songs
 *************************/

export function getSongs(db = connection): Promise<Song[]> {
  return db('albums').select('album.id AS album_id')
}

export function getSong(id: number, db = connection): Promise<Song> {
  return db('albums').select().where('id', id).first()
}

// TODO get songs by album id
// TODO join --- return song with album details
