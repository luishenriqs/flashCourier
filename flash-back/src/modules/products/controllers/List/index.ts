import { ListProductsController } from './ListProductsController'
import { ListProductsUseCase } from './ListProductsUseCase'
import { ProductRepository } from '../../../../repositories/implementations/ProductRepository'

const productRepository = new ProductRepository()
const listProductsUseCase = new ListProductsUseCase(productRepository)
const listProductsController = new ListProductsController(listProductsUseCase)

export { listProductsController }
