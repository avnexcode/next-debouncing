import React, { useEffect } from 'react'

import { useQueryProducts } from '@/features/product'
import { Product } from '@/types/product'
import ProductCard from '@/components/elements/product/ProductCard'
import { useProductStore } from '@/store/product'

type ProductListProps = {
    search: string
}

const renderElements = (products: Product[]) => products?.map(product => <ProductCard key={product.id} product={product} />)

export default function ProductList({ search }: ProductListProps) {

    const { data: products, isLoading, refetch: productRefetch } = useQueryProducts(search)

    const { setProductLength } = useProductStore()

    useEffect(() => {
        productRefetch()
        setProductLength(products?.length)
    }, [search, productRefetch, products?.length, setProductLength])

    return (
        <div className='flex w-full px-10 gap-10 flex-wrap py-5 justify-center'>
            {products?.length === 0 && <h1>Tidak ada product</h1>}
            {isLoading ? <h1>Loading...</h1> : renderElements(products)}
        </div>
    )
}
