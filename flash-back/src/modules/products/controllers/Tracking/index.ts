import { TrackingController } from './TrackingController'
import { TrackingUseCase } from './TrackingUseCase'
import { ProductRepository } from '../../../../repositories/implementations/ProductRepository'

const productRepository = new ProductRepository()
const trackingUseCase = new TrackingUseCase(productRepository)
const trackingController = new TrackingController(trackingUseCase)

export { trackingController }
