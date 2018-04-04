import { JsonController, Post, Param, Get, Body, Authorized } from 'routing-controllers'
import Teacher from './entity';

@JsonController()
export default class TeacherController {

    @Post('/users')
    async signup(
        @Body() user: Teacher
    ) {
        const { password, ...rest } = user
        const entity = Teacher.create(rest)
        await entity.setPassword(password)
        return entity.save()
    }

    @Authorized()
    @Get('/users/:id([0-9]+)')
    getUser(
        @Param('id') id: number
    ) {
        return Teacher.findOneById(id)
    }

    @Authorized()
    @Get('/users')
    allUsers() {
        return Teacher.find()
    }
}

