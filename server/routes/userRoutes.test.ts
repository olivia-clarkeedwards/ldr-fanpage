import request from 'supertest'
import server from '../server'
import * as db from '../db/theme-db'
import { mocked } from 'jest-mock'

jest.mock('../db/db')
