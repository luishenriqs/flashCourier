import { DeleteController } from './DeleteController'
import { DeleteUseCase } from './DeleteUseCase'
import { ProductRepository } from '../../../../repositories/implementations/ProductRepository'

const productRepository = new ProductRepository()
const deleteUseCase = new DeleteUseCase(productRepository)
const deleteController = new DeleteController(deleteUseCase)

export { deleteController }
