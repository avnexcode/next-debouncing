import React, { useEffect } from 'react'

import { useQueryProducts } from '@/features/product'
import { Product } from '@/types/product'
import ProductCard from '@/components/elements/product/ProductCard'


type ProductListProps = {
    search: string
}

const renderElements = (products: Product[]) => products?.map((product, index) => <ProductCard key={index} product={product}/>)

export default function ProductList({ search }: ProductListProps) {

    const { data: products, isLoading, refetch: productRefetch } = useQueryProducts(search)

    useEffect(() => {
        productRefetch()
    }, [search, productRefetch])

    return (
        <div className='flex w-full px-10 gap-10 flex-wrap py-5'>
            {isLoading ? <h1>Loading...</h1> : renderElements(products)}
        </div>
    )
}
