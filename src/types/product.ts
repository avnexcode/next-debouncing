import { z } from 'zod'

export const productSchema = z.object({
    id: z.string()
        .uuid()
        .optional(),
    name: z.string({
        required_error: 'Nama tidak boleh kosong',
        invalid_type_error: 'Tipe data harus berupa teks'
    })
        .min(1, 'Nama tidak boleh kosong')
        .min(3, 'Minimal 3 huruf')
        .max(100, 'Maksimal 100 huruf'),
    price: z.string({
        required_error: 'Harga tidak boleh kosong',
        invalid_type_error: 'Tipe data harus berupa teks'
    }).min(1, { message: "Harga tidak boleh kosong" })
})

export type Product = z.infer<typeof productSchema>