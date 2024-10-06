import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@radix-ui/react-dialog'
import React from 'react'
import ProductForm from './ProductForm'
import { DialogHeader } from '@/components/ui/dialog'

export default function DialogForm() {
    const [open, setOpen] = React.useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogTrigger className='min-w-max'>
                Create New Product
            </DialogTrigger>
            <DialogContent className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <ProductForm onSuccess={() => setOpen(false)} />
            </DialogContent>
        </Dialog>
    )
}
