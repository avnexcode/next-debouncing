import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Product } from '@/types/product'
import React from 'react'
import { useForm } from 'react-hook-form'

type ProductFormInnerProps = {
    onSubmit: (values: Product) => void
}

export default function ProductFormInner(props: ProductFormInnerProps) {
    const form = useForm<Product>({
        defaultValues: {
            name: "",
            price: ""
        }
    })
    return (
        <form action="" onSubmit={form.handleSubmit(props.onSubmit)} id='product-form'>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Product Name</FormLabel>
                        <FormControl>
                            <Input placeholder="product name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Product Price</FormLabel>
                        <FormControl>
                            <Input placeholder="product price" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </form>
    )
}
