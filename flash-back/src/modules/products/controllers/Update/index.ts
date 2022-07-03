import { UpdateProductController } from './UpdateProductController'
import { UpdateProductUseCase } from './UpdateProductUseCase'
import { ProductRepository } from '../../../../repositories/implementations/ProductRepository'

const productRepository = new ProductRepository()
const updateProductUseCase = new UpdateProductUseCase(productRepository)
const updateProductController = new UpdateProductController(
    updateProductUseCase
)

export { updateProductController }
