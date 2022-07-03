import { IProductRepository } from '../../../../repositories/IProductRepository'

class FindProductUseCase {
    constructor(private productRepository: IProductRepository) {}
    async execute(id: string) {
        try {
            const product = await this.productRepository.find(id)

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

export { FindProductUseCase }
