import React from 'react'

import Axios, { AxiosInstance } from 'axios'

const dummyAxiosInstance = undefined as unknown as AxiosInstance

export const AxiosContext = React.createContext<AxiosInstance>(dummyAxiosInstance)

export function AxiosProvider({ children }: { children: React.ReactNode }) {
  const axios = React.useMemo(() => {
    const axios = Axios.create({
      baseURL: 'https://example-data.draftbit.com',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    })

    return axios
  }, [])

  return <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
}
