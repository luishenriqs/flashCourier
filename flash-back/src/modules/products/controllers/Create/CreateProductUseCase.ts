import { IProductRepository } from '../../../../repositories/IProductRepository'
import { ICreateProductDTO } from './DTO'

class CreateProductUseCase {
    constructor(private productRepository: IProductRepository) {}
    async execute(product: ICreateProductDTO) {
        const owner = product.owner as string
        const email = product.email as string
        const product_type = product.product_type as string

        try {
            const response = await this.productRepository.create({
                owner,
                email,
                product_type,
                status: 'Coleta',
            })

            return {
                status: 201,
                message: response,
            }
        } catch (error) {
            console.log('error', error)
            throw {
                status: 400,
                message: error,
            }
        }
    }
}

export { CreateProductUseCase }
