import { Router } from 'express'
import { productsRoutes } from '../routes/products.routes'

const router = Router()

try {
    router.use('/products', productsRoutes)
} catch (error) {
    console.log(error)
}

export { router }
