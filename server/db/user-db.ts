import config from './knexfile'
import knex from 'knex'
import { User, UserDetails } from '../../common/User'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

/*
 * users
 *************************/

export function getUsers(db = connection): Promise<User[]> {
  return db('users').select()
}

export function getUser(id: number, db = connection): Promise<User> {
  return db('users').select().where('id', id).first()
}

export function addUser(user: UserDetails, db = connection): Promise<User> {
  return db('users').insert(user)
}

// TODO: edit user

// export function updateUser(
//   id: number,
//   newDetails: UserDetails,
//   db = connection
// ): Promise<User> {
//   return db('users').update(newDetails).where('id', id)
// }
