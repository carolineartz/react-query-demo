import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions } from 'react-query'

import { useAxios } from '@/hooks/useAxios'

export function useQueryProducts(config: UseQueryOptions<ProductData[], AxiosError, ProductData[]> = {}) {
  const axios = useAxios()

  // using an array key for the collection call as well as the members makes it possible to
  // match all queries for a resource
  return useQuery<ProductData[], AxiosError>(
    ['products'],
    async () => {
      const { data } = await axios.get<ProductData[]>('/products', { params: { _limit: 50 } })

      return data
    },
    config
  )
}
