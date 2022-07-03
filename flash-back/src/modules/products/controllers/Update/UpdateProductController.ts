import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'

class UpdateProductController {
    constructor(private updateProductUseCase: UpdateProductUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id, status } = request.body

            const resp = await this.updateProductUseCase.execute({
                id,
                status,
            })

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { UpdateProductController }
