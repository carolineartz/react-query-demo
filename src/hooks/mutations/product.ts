import React from 'react'

import { useQueryClient, useMutation } from 'react-query'

import { updateList } from '@/helpers/mutationResponseHelper'
import { useAxios } from '@/hooks/useAxios'

export function useMutationUpdateProduct() {
  const queryClient = useQueryClient()
  const axios = useAxios()

  const updateProduct = React.useCallback(
    async (params: ProductData) => {
      const resp = await axios.put(`/products/${params.id}`, params)
      return resp.data
    },
    [axios]
  )

  return useMutation(updateProduct, {
    onMutate: async (data) => {
      // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries([['products']])

      // Snapshot the previous value
      const previousProducts = queryClient.getQueryData<ProductData[]>(['products'])
      const previousProduct = queryClient.getQueryData<ProductData>(['products', Number(data.id)])

      // Optimistically update to the new value
      updateList(['products'], { ...data, id: Number(data.id) }, queryClient)
      queryClient.setQueryData(['products', Number(data.id)], { ...data, id: Number(data.id) })

      // Return a context object with the snapshotted value
      return { previousProducts, previousProduct }
    },
    // If the mutation fails, use the context returned from onMutate to roll back
    onError: (
      err,
      newProduct,
      context: { previousProducts: ProductData[] | undefined; previousProduct: ProductData | undefined } | undefined
    ) => {
      queryClient.setQueryData(['products'], context?.previousProducts)
      queryClient.setQueryData(['products', Number(newProduct.id)], context?.previousProduct)
      console.log(err)
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries([['products']])
    },
  })
}
