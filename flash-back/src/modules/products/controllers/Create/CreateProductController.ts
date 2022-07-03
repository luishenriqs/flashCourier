import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'
import { ICreateProductDTO } from './DTO'

class CreateProductController {
    constructor(private createProductUseCase: CreateProductUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const product = request.body as ICreateProductDTO

            const resp = await this.createProductUseCase.execute(product)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { CreateProductController }
