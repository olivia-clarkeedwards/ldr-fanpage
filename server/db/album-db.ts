import config from './knexfile'
import knex from 'knex'
import { Album } from '../../common/Album'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

/*
 * albums
 *************************/

export function getAlbums(db = connection): Promise<Album[]> {
  return db('albums').select()
}

export function getAlbum(id: number, db = connection): Promise<Album> {
  return db('albums').select().where('id', id).first()
}
