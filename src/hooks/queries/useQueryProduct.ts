import { AxiosError } from 'axios'
import { useQuery, UseQueryOptions, useQueryClient } from 'react-query'

import { useAxios } from '@/hooks/useAxios'

export function useQueryProduct(params: { id: number }, config: UseQueryOptions<ProductData, AxiosError, ProductData>) {
  const axios = useAxios()
  const queryClient = useQueryClient()

  return useQuery<ProductData, AxiosError>(
    ['products', params.id],
    async () => {
      const { data } = await axios.get<ProductData>(`/products/${params.id}`)

      return data
    },
    {
      onSuccess: (data: ProductData) => {
        // Update the individual product in the list of products in case that data is stale
        const existingQueryData = queryClient.getQueryData<ProductData[]>(['products'])

        if (existingQueryData) {
          queryClient.setQueryData(['products'], (outdatedProducts: ProductData[] | undefined) =>
            outdatedProducts!.map((product) => (product.id === data.id ? data : product))
          )
        }
      },
      initialData: () => {
        // Get the query state for all products
        const state = queryClient.getQueryState<ProductData[]>(['products'])

        // If the query exists and has data that is no older than 10 minutes
        if (state && Date.now() - state.dataUpdatedAt <= 600 * 1000) {
          // return the individual product from the all products query
          return state.data?.find((d) => d.id === params.id)
        }

        // Otherwise, return undefined and let it fetch from a hard loading state!
      },
      ...config,
    }
  )
}
