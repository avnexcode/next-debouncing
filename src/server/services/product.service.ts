import * as repository from "../repositories/product.repository"

export const getAllProducts = async () => {
    const data = await repository.findAllProducts()
    return data
}