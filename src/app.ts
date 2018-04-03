import 'reflect-metadata'
import {createKoaServer, Action} from 'routing-controllers'
//import UserController from './users/controller'

export default createKoaServer({
  controllers: [
   
   ]
  // authorizationChecker: (action: Action) => {
  //   const header: string =
  //   action.request.headers.authorization
  //   if (header && header.startsWith('Bearer')) {
  //     const [ , token ] = header.split(' ')
  //     return !!(token && verify(token))
  //   }
  //   return false
  // }
})
