import { JsonController, Get, NotFoundError, Param, Post, Body, Put, Delete } from "routing-controllers";
import Student from './entity'


@JsonController()
export default class StudentController {

    @Get('/student')
    async getAllStudents() {
        return await Student.find()
    }
    @Get('/student/:id([0-9]+)')
    async getSingleStudent(
        @Param("id") id: number
    ) {
        const student = await Student.findOneById(id)
        if (!student) throw new NotFoundError("No student found")
        return student
    }


    @Post('/student')
    async createStudent(
        @Body() body: Student
    ) {
        const student = await Student.create(body).save()
        return student
    }


    @Put('/student/:id([0-9]+)')
    async updateStudent(
        @Param("id") id: number,
        @Body() update: Student
    ) {
        const student = await Student.findOneById(id)
        if (!student) throw new NotFoundError("Student not found")

        return Student.merge(student, update).save()
    }


}