import { JsonController, Get, NotFoundError, Param, Post, Body, Put, Delete } from "routing-controllers";
import Evaluation from './entity'
import Student from '../student/entity'


@JsonController()
export default class EvaluationController {

    @Get('/evaluation')
    async getAllEvaluations() {
        return await Evaluation.find()
    }
    @Get('/evaluation/:id([0-9]+)')
    async getSingleEvaluation(
        @Param("id") id: number
    ) {
        const evaluation = await Evaluation.findOneById(id)
        if (!evaluation) throw new NotFoundError("No evaluation found")
        return evaluation
    }

    
    @Post('/evaluation/student/:id([0-9]+)')
    async createEvaluation(
        @Param('id') studentId: number,
        @Body() body: Evaluation
    ) {
        
            const student = await Student.findOneById(studentId)
           
            const evaluation = await Evaluation.create(
               {
                ...body,
                student
                //teacher
                }
            )

            evaluation.save()
       
            return evaluation

    }


    // @Put('/evaluation/:id([0-9]+)')
    // async updateEvaluation(
    //     @Param("id") id: number,
    //     @Body() update: Partial<Evaluation>
    // ) {
    //     const evaluation = await Evaluation.findOneById(id)
    //     if (!evaluation) throw new NotFoundError("Evaluation not found")

    //     return Evaluation.merge(evaluation, update).save()
    // }


}