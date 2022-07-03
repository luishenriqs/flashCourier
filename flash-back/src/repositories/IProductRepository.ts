import { Product } from '@prisma/client'

export interface IProductDTO {
    owner: string
    email: string
    product_type: string
    status: string
}

interface IProductRepository {
    create(data: IProductDTO): Promise<Product>

    delete(id: string): Promise<void>

    find(id: string): Promise<Product | null>

    findAll(): Promise<Product[]>

    update(id: string, status: string): Promise<Product>

    tracking(tracking_number: number): Promise<Product | null>
}

export { IProductRepository }
