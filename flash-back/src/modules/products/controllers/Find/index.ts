import { FindProductController } from './FindProductController'
import { FindProductUseCase } from './FindProductUseCase'
import { ProductRepository } from '../../../../repositories/implementations/ProductRepository'

const productRepository = new ProductRepository()
const findProductUseCase = new FindProductUseCase(productRepository)
const findProductController = new FindProductController(findProductUseCase)

export { findProductController }
