import { useQueryProducts } from '@/features/product';
import React from 'react'

export default function Home() {
  const { data } = useQueryProducts()
  console.log(data)
  return (
    <>
      <main className='w-full flex justify-center py-20'>
        <h1 className='text-5xl'>Hello World</h1>
      </main>
    </>
  );
}
