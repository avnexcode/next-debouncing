import prisma from "../db";

export const findAllProducts = async () => {
    return await prisma.product.findMany()
}