import ProductList from '@/components/fragments/product/ProductList'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ProductPage() {
  const [search, setSearch] = useState<string>("")
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <>
      <header className='w-full flex justify-between items-center px-5 gap-5 py-10'>
        <div className='w-full'>
          <Input placeholder="search product" onChange={handleSearch} />
        </div>
        <Link href={'/product/create'}>
          <Button variant={'outline'}>
            Create New Product
          </Button>
        </Link>
      </header>
      <main className='w-full'>
        {<ProductList search={search} />}
      </main>
    </>
  )
}
