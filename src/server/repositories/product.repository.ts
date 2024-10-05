import { Product } from "@/types/product";
import prisma from "../db";

export const findAllProducts = async (search: string) => {
    const fieldsToSearch = ['name', 'price'];

    const searchConditions = fieldsToSearch.map((field) => ({
        [field]: {
            contains: search,
            mode: 'insensitive'
        }
    }));
    return await prisma.product.findMany({
        where: {
            OR: searchConditions
        },
        select: {
            id: true,
            name: true,
            price: true,
        }
    })
}

export const findProductID = async (id: string) => {
    return await prisma.product.findUnique({ where: { id } })
}

export const insertProduct = async (newProductData: Product) => {
    return await prisma.product.create({
        data: newProductData
    })
}

export const updateProduct = async (id: string, productData: Product) => {
    return await prisma.product.update({
        data: productData,
        where: { id }
    })
}

export const destroyProduct = async (id: string) => {
    return await prisma.product.delete({ where: { id } })
}