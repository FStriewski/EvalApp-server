import { JsonController, Post, Param, Get, Put, Patch, NotFoundError, Body, Authorized, Delete } from 'routing-controllers'
import User from './entity';
import * as request from 'superagent'

const eventUrl = process.env.EVENT_URL || ''

// this makes sure a class is marked as controller that always returns JSON
@JsonController()
export default class TeacherController {


}
