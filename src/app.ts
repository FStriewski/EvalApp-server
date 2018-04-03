import 'reflect-metadata'
import { createKoaServer, Action, BadRequestError} from 'routing-controllers'
import TeacherController from './teacher/controller'
import EvaluationController from './evaluation/controller'
import BatchController from './batch/controller'
import StudentController from './student/controller'
import Teacher from './teacher/entity'
import { verify } from './jwt'




export default createKoaServer({
  controllers: [
    TeacherController,
    EvaluationController,
    BatchController,
    StudentController,
   ],
  authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
      const [, token] = header.split(' ')

      try {
        return !!(token && verify(token))
      }
      catch (e) {
        throw new BadRequestError(e)
      }
    }

    return false
  },
  currentUserChecker: async (action: Action) => {
    const header: string = action.request.headers.authorization
    if (header && header.startsWith('Bearer ')) {
      const [, token] = header.split(' ')

      if (token) {
        const { id } = verify(token)
        return Teacher.findOneById(id)
      }
    }
    return undefined
  }
})
