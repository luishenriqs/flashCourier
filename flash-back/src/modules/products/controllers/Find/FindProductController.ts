import { Request, Response } from 'express'
import { FindProductUseCase } from './FindProductUseCase'

class FindProductController {
    constructor(private findProductUseCase: FindProductUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const id = request.params.id

            const resp = await this.findProductUseCase.execute(id)

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { FindProductController }
