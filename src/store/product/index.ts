import { create } from 'zustand'

interface ProductStore {
    productLength: number
    setProductLength: (productLength: number) => void
}

export const useProductStore = create<ProductStore>((set) => {
    return {
        productLength: 0,
        setProductLength: productLength => set(() => {
            return { productLength }
        })
    }
})