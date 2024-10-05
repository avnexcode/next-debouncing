// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as controller from "@/server/controllers/product.controller";
import { Product } from "@/types/product";
import type { NextApiRequest, NextApiResponse } from "next";

type Response = {
    status: boolean
    statusCode: number
    message: string
    data?: Product[]
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Response>) {
    const { method } = req
    switch (method) {
        case "GET":
            return controller.GETID(req, res)
        case "PUT":
            return controller.PUT(req, res)
        case "PATCH":
            return controller.PATCH(req, res)
        case "DELETE":
            return controller.DELETE(req, res)
        default:
            break;
    }
}
