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
      return controller.GET(req, res)
    case "POST":
      return controller.POST(req, res)
    default:
      break;
  }
}
