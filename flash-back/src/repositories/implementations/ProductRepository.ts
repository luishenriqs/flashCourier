import { Product } from '@prisma/client'
import { prisma } from '../../prisma'
import { IProductRepository, IProductDTO } from '../IProductRepository'

export class ProductRepository implements IProductRepository {
    async create({
        owner,
        email,
        product_type,
        status,
    }: IProductDTO): Promise<Product> {
        const product = await prisma.product.create({
            data: {
                owner,
                email,
                product_type,
                status,
            },
        })
        return product
    }

    async delete(id: string): Promise<void> {
        await prisma.product.delete({
            where: {
                id,
            },
        })
    }

    async find(id: string): Promise<Product | null> {
        const product = await prisma.product.findUnique({
            where: {
                id,
            },
        })
        return product
    }

    async findAll(): Promise<Product[]> {
        const product = await prisma.product.findMany()
        return product
    }

    async update(id: string, status: string): Promise<Product> {
        const product = await prisma.product.update({
            where: {
                id,
            },
            data: {
                status,
            },
        })
        return product
    }

    async tracking(tracking_number: number): Promise<Product | null> {
        const product = await prisma.product.findFirst({
            where: {
                tracking_number,
            },
        })
        return product
    }
}
