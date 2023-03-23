import config from './knexfile'
import knex from 'knex'
import { User } from '../../common/User'
import { Album } from '../../common/Album'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

export function getUsers(db = connection): Promise<User[]> {
  return db('users').select()
}

export function getAlbums(db = connection): Promise<Album[]> {
  return db('albums').select()
}

// get user

// add user

// edit user

// add theme

// get themes

// edit theme
