import React from 'react'
import { Product } from '@/types/product'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { toIDR } from '@/utils/toIDR'

type ProductCardProps = {
    product: Product
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <Card className='min-w-[500px]'>
        <CardHeader>
            <CardTitle className='capitalize'>{props.product.name}</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>{toIDR(Number(props.product.price))}</p>
        </CardContent>
        <CardFooter>
            <div className='flex justify-end w-full'>
                <Button>Detail</Button>
            </div>
        </CardFooter>
    </Card>
  )
}
