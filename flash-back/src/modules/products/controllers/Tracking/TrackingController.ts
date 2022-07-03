import { Request, Response } from 'express'
import { TrackingUseCase } from './TrackingUseCase'

class TrackingController {
    constructor(private trackingUseCase: TrackingUseCase) {}
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const tracking_number = request.params.tracking_number

            const resp = await this.trackingUseCase.execute(
                Number(tracking_number)
            )

            return response.status(resp.status).json(resp.message)
        } catch (error: any) {
            console.log(error)
            return response.status(error.status).json(error.data)
        }
    }
}

export { TrackingController }
