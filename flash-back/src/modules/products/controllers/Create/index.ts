import { CreateProductController } from './CreateProductController'
import { CreateProductUseCase } from './CreateProductUseCase'
import { ProductRepository } from '../../../../repositories/implementations/ProductRepository'

const productRepository = new ProductRepository()
const createProductUseCase = new CreateProductUseCase(productRepository)
const createProductController = new CreateProductController(
    createProductUseCase
)

export { createProductController }
