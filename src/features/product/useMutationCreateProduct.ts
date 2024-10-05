import { axiosInstance } from "@/lib/axios";
import { Product } from "@/types/product";
import { useMutation } from "@tanstack/react-query";

export const useMutationCreateProduct = ({ onSuccess }: { onSuccess: () => void }) => useMutation({
    mutationKey: ["products"],
    mutationFn: async (body: Product) => {
        const response = await axiosInstance.post('/products', body)
        return response.data.data
    },
    onSuccess
})