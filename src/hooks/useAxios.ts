import React from 'react'

import { AxiosContext } from '@/contexts/AxiosProvider'

export function useAxios() {
  return React.useContext(AxiosContext)
}
