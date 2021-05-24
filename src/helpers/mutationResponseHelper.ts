import { QueryClient, QueryKey } from 'react-query'

export function updateList<T extends { id: number }>(queryKey: QueryKey, data: T, queryClient: QueryClient) {
  const collectionCache = queryClient.getQueryData<T[]>(queryKey)

  if (collectionCache) {
    // eslint-disable-next-line eqeqeq
    const updatedData: T[] = collectionCache.map((t: T) => (t.id === data.id ? data : t))
    queryClient.setQueryData<T[]>(queryKey, updatedData)
  }
}
