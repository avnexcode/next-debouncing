import React from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Product, productSchema } from '@/types/product';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

import { useMutationCreateProduct, useQueryProducts } from '@/features/product';
import { toast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductFormProps {
    onSuccess?: () => void;
}

export default function ProductForm({ onSuccess }: ProductFormProps) {

    const { refetch: refetchProduct } = useQueryProducts()
    const { mutate, isPending } = useMutationCreateProduct({
        onSuccess: () => {
            form.reset()
            toast({
                title: 'Success',
                description: 'Success Create New Product'
            })
            refetchProduct()
            onSuccess?.()
        }
    })

    const form = useForm<Product>({
        defaultValues: {
            name: "",
            price: ""
        },
        resolver: zodResolver(productSchema)
    })

    const onSubmit = (data: Product) => mutate(data)

    return (
        <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
                <Card className='min-w-[600px] min-h-[450px]'>
                    <CardHeader>
                        <CardTitle className='flex justify-center w-full text-4xl'>Create New Product Form</CardTitle>
                        <CardDescription className='text-xl'>Input your new product here</CardDescription>
                    </CardHeader>
                    <CardContent className='flex flex-col gap-y-5 py-5'>
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
                    </CardContent>
                    <CardFooter className='w-full flex justify-end items-center'>
                        <Button type='submit' variant={'default'} disabled={isPending}>{isPending ? "Pending" : "Submit"}</Button>
                    </CardFooter>
                </Card>
            </form>
        </Form>
    )
}
