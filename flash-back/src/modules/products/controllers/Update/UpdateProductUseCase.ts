import { IProductRepository } from '../../../../repositories/IProductRepository'

interface IRequest {
    id: string
    status: string
}

class UpdateProductUseCase {
    constructor(private productRepository: IProductRepository) {}
    async execute({ id, status }: IRequest) {
        try {
            const updatedProduct = await this.productRepository.update(
                id,
                status
            )

            return {
                status: 200,
                message: {
                    updatedProduct,
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

export { UpdateProductUseCase }
