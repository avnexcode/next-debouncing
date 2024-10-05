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
import Link from 'next/link'
import ButtonDelete from './ButtonDelete'

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
                <div className='flex justify-end w-full gap-x-4 items-center'>
                    <div>
                        <Link href={`/product/${props.product.id}`}><Button>Detail</Button></Link>
                    </div>
                    <div>
                        <ButtonDelete id={props.product.id!}/>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}
