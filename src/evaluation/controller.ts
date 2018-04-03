import { JsonController, Get, NotFoundError, Param, Post, Body, Put, Delete } from "routing-controllers";
import Evaluation from './entity'


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

    // Needs user connection
    @Post('/evaluation')
    async createEvaluation(
        @Body() body: Evaluation
    ) {
        const evaluation = await Evaluation.create(body).save()
        return evaluation
    }


    @Put('/evaluation/:id([0-9]+)')
    async updateEvaluation(
        @Param("id") id: number,
        @Body() update: Evaluation
    ) {
        const evaluation = await Evaluation.findOneById(id)
        if (!evaluation) throw new NotFoundError("Evaluation not found")

        return Evaluation.merge(evaluation, update).save()
    }


}