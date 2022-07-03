import { Request, Response } from 'express'
import { ListProductsUseCase } from './ListProductsUseCase'

class ListProductsController {
    constructor(private listProductsUseCase: ListProductsUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const resp = await this.listProductsUseCase.execute()

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { ListProductsController }
