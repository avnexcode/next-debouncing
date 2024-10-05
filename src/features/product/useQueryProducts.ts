import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryProducts = (search?: string) => useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const response = await axiosInstance.get(`/products?search=${search}`)
        return response.data.data
    }
})