import { NextApiRequest, NextApiResponse } from "next"
import * as service from "../services/product.service"

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await service.getAllProducts()
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
            message: `Error Stack: ${error}`
        })
    }
}

export const DELETE = () => { }