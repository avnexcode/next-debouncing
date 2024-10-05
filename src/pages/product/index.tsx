import DialogForm from '@/components/fragments/product/DialogForm'
import ProductList from '@/components/fragments/product/ProductList'
import { Input } from '@/components/ui/input'
import { useSearchParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'

export default function ProductPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const searchQuery = searchParams.get('search') || ""
  const [search, setSearch] = useState<string>(searchQuery)
  const [searchDebounce] = useDebounce(search, 500)

  useEffect(() => {
    setSearch(searchQuery)
  }, [searchQuery])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value
    setSearch(searchValue)

    const params = new URLSearchParams(Object.entries(searchParams))

    if (searchValue) {
      params.set('search', searchValue)
    } else {
      params.delete('search')
    }

    router.push(`?${params.toString()}`)
  }

  return (
    <>
      <header className='w-full flex justify-between items-center px-5 gap-5 py-10'>
        <div className='w-full'>
          <Input
            placeholder="Search product"
            onChange={handleSearch}
            value={search}
          />
        </div>
        <div>
          <DialogForm />
        </div>
      </header>
      <main className='w-full'>
        <ProductList search={searchDebounce} />
      </main>
    </>
  )
}
