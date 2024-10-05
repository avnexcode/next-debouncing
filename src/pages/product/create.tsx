import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Product, productSchema } from '@/types/product';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useMutationCreateProduct } from '@/features/product';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function ProductCreatePage() {

  const router = useRouter()

  const { mutate, isPending } = useMutationCreateProduct({
    onSuccess: () => {
      form.reset()
      toast({
        title: 'Success',
        description: 'Success Create New Product'
      })
      router.push('/product')
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
    <main className='w-full flex justify-center py-20 flex-col'>
      <div className='flex justify-center py-10'>
        <h1 className='text-5xl'>Hello World</h1>
      </div>
      <div className='px-10'>
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className='mb-5'>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="product name" {...field} />
                    </FormControl>
                    <FormDescription>Input Product Name Here</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='mb-5'>
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Price</FormLabel>
                    <FormControl>
                      <Input placeholder="product price" {...field} />
                    </FormControl>
                    <FormDescription>Input Product Price Here</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='flex justify-end'>
              <Button type='submit' variant={'default'} disabled={isPending}>{isPending ? "Pending" : "Submit"}</Button>
            </div>
          </form>
        </Form>
      </div>
    </main>
  )
}
