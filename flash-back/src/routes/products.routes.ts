import { Router } from 'express'
import { createProductController } from '../modules/products/controllers/Create'
import { listProductsController } from '../modules/products/controllers/List'
import { findProductController } from '../modules/products/controllers/Find'
import { updateProductController } from '../modules/products/controllers/Update'
import { deleteController } from '../modules/products/controllers/Delete'
import { trackingController } from '../modules/products/controllers/Tracking'

const productsRoutes = Router()

productsRoutes.post('/create', (request, response) =>
    createProductController.handle(request, response)
)

productsRoutes.get('/list', (request, response) =>
    listProductsController.handle(request, response)
)

productsRoutes.get('/find/:id', (request, response) =>
    findProductController.handle(request, response)
)

productsRoutes.patch('/update', (request, response) =>
    updateProductController.handle(request, response)
)

productsRoutes.delete('/delete/:id', (request, response) =>
    deleteController.handle(request, response)
)

productsRoutes.get('/tracking/:tracking_number', (request, response) =>
    trackingController.handle(request, response)
)

export { productsRoutes }
