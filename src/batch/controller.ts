import { JsonController, Get, NotFoundError, Param, Post, Body } from "routing-controllers";
import Batch from './entity'


@JsonController()
export default class BatchController {

    @Get('/batch')
    async getAllBatchs() {
        return await Batch.find()
    }
    @Get('/batch/:id([0-9]+)')
    async getSingleBatch(
        @Param("id") id: number
    ) {
        const batch = await Batch.findOneById(id)
        if (!batch) throw new NotFoundError("No batch found")
        return batch
    }

    @Post('/batch')
    async createBatch(
        @Body() body: Batch
    ) {
        const batch = await Batch.create(body).save()
        return batch
    }
}