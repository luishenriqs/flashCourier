import { IProductRepository } from '../../../../repositories/IProductRepository'

class TrackingUseCase {
    constructor(private productRepository: IProductRepository) {}
    async execute(tracking_number: number) {
        try {
            const product = await this.productRepository.tracking(
                tracking_number
            )

            return {
                status: 200,
                message: {
                    product,
                },
            }
        } catch (error) {
            console.log('error', error)
            throw {
                status: 400,
                data: error,
            }
        }
    }
}

export { TrackingUseCase }
