import { JsonController, Get, NotFoundError, Param, Post, Body, Put, Delete } from "routing-controllers";
import Student from './entity'
import Batch from '../batch/entity'


@JsonController()
export default class StudentController {

    @Get('/students')
    async getAllStudents() {
        return await Student.find()
    }
    @Get('/students/:id([0-9]+)')
    async getSingleStudent(
        @Param("id") id: number
    ) {
        const student = await Student.findOneById(id)
        if (!student) throw new NotFoundError("No student found")
        return student
    }


    @Post('/batch/:id([0-9]+)/students')
    async createStudent(
        @Param('id') batchId: number,
        @Body() body: Student
    ) {
        const batch = await Batch.findOneById(batchId)
        
        const student = await Student.create({
            ...body,
            batch
        }).save()
        return student
    }


    @Put('/students/:id([0-9]+)')
    async updateStudent(
        @Param("id") id: number,
        @Body() update: Partial<Student>
    ) {
        const student = await Student.findOneById(id)
        if (!student) throw new NotFoundError("Student not found")

        return Student.merge(student, update).save()
    }

    // @Delete('/students/:id([0-9]+)')
    //     deleteStudent(
    //         @Param("id") id: number
    //     ) {
    //         console.log("Deleting...")
    //         if (!id) throw new NotFoundError("Student not found")
    //         return Student.removeById(id)

    //     }


}