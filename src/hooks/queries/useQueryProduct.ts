import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'

import { useAxios } from '@/hooks/useAxios'

export function useQueryProduct(
  params: { id: number },
  config: UseQueryOptions<ProductData[], AxiosError, ProductData[]>
) {
  const axios = useAxios()

  return useQuery<ProductData[], AxiosError>(
    ['products', params.id],
    async () => {
      const { data } = await axios.get<ProductData[]>(`/products/${params.id}`)

      return data
    },
    config
  )
}
