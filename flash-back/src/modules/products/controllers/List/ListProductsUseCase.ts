import { IProductRepository } from '../../../../repositories/IProductRepository'

class ListProductsUseCase {
    constructor(private productRepository: IProductRepository) {}
    async execute() {
        try {
            const products = await this.productRepository.findAll()

            return {
                status: 200,
                message: products,
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

export { ListProductsUseCase }
