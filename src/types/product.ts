import { z } from 'zod'

export const productSchema = z.object({
    id: z.string()
        .optional(),
    name: z.string({
        required_error: 'Nama tidak boleh kosong',
        invalid_type_error: 'Tipe data harus berupa teks'
    })
        .min(3, 'Minimal 3 huruf')
        .max(100, 'Maksimal 100 huruf'),
    price: z.string({
        required_error: 'Harga tidak boleh kosong',
        invalid_type_error: 'Tipe data harus berupa teks'
    })
})

export type Product = z.infer<typeof productSchema>