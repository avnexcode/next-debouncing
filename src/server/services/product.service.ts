import { Product } from "@/types/product"
import * as repository from "../repositories/product.repository"

export const getAllProducts = async (search: string) => {
    const data = await repository.findAllProducts(search)
    return data
}

export const getProductID = async (id: string) => {
    const data = await repository.findProductID(id)
    if (!data) {
        throw new Error(`Product Not Found`)
    }
    return data
}

export const createProduct = async (newProductData: Product) => {
    const data = await repository.insertProduct(newProductData)
    return data
}

export const editProduct = async (id: string, productData: Product) => {
    await getProductID(id)
    const data = await repository.updateProduct(id, productData)
    return data
}

export const deleteProduct = async (id: string) => {
    await getProductID(id)
    const data = await repository.destroyProduct(id)
    return data
}