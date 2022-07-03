import { IProductRepository } from '../../../../repositories/IProductRepository'

class DeleteUseCase {
    constructor(private productRepository: IProductRepository) {}
    async execute(id: string) {
        try {
            await this.productRepository.delete(id)

            return {
                status: 200,
                message: 'Successfully deleted one product.',
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

export { DeleteUseCase }
