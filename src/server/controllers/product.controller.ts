import { NextApiRequest, NextApiResponse } from "next"
import * as service from "../services/product.service"

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    const search = req.query.search as string 
    try {
        const data = await service.getAllProducts(search || "")

        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all products data',
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error instanceof Error ? error.message : String(error)
            })
        })
    }
}

export const GETID = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'Invalid or missing prduct id',
        });
    }
    try {
        const data = await service.getProductID(id)
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved product detail',
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error instanceof Error ? error.message : String(error)
            })
        })
    }
}

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, price } = req.body
    try {
        const data = await service.createProduct({
            name, price
        })
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success retrieved all products data',
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error instanceof Error ? error.message : String(error)
            })
        })
    }
}

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const { name, price } = req.body
    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'Invalid or missing post ID',
        });
    }
    if (!(name && price)) {
        return res.status(404).json({
            status: false,
            statusCode: 404,
            message: 'Some fields are missing'
        })
    }
    try {
        const data = await service.editProduct(id, {
            name, price
        })
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success updated product data',
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error instanceof Error ? error.message : String(error)
            })
        })
    }
}

export const PATCH = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    const { name, price } = req.body
    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'Invalid or missing post ID',
        });
    }
    try {
        const data = await service.editProduct(id, {
            name, price
        })
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success updated product data',
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error instanceof Error ? error.message : String(error)
            })
        })
    }
}

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query
    if (!id || typeof id !== 'string') {
        return res.status(400).json({
            status: false,
            statusCode: 400,
            message: 'Invalid or missing post ID',
        });
    }
    try {
        const data = await service.deleteProduct(id)
        return res.status(200).json({
            status: true,
            statusCode: 200,
            message: 'Success deleted product data',
            data
        })
    } catch (error) {
        return res.status(500).json({
            status: false,
            statusCode: 500,
            message: 'Internal server error',
            ...(process.env.NODE_ENV === 'development' && {
                debug: error instanceof Error ? error.message : String(error)
            })
        })
    }
}