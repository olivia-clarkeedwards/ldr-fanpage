import config from './knexfile'
import knex from 'knex'
import { Album } from '../../common/Album'
import { Song } from '../../common/Song'

type Environment = 'production' | 'test' | 'development'
const environment = (process.env.NODE_ENV as Environment) || 'development'
const connection = knex(config[environment])

// add theme

// get themes

// edit theme
