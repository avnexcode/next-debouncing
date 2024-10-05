import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetailPage() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>Hello Product id = {id}</div>
  )
}
