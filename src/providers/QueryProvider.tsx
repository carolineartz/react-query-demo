import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const options = {
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
}

const queryClient = new QueryClient(options)

export function QueryProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* devtools should go after all the rest of the app content */}
      {/* devtools are automatically excluded when NODE_ENV = production */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
