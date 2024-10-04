import { axiosInstance } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const useQueryProducts = () => useQuery({
    queryKey: ['products'],
    queryFn: async () => {
        const response = await axiosInstance.get('/products')
        return response.data.data
    }
})