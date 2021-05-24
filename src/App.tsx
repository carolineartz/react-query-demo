import React from 'react'

import { Grommet, grommet } from 'grommet'

import 'styled-components/macro'

import { ProductsPage } from './components/products/ProductsPage'

function App() {
  return (
    <Grommet css="height: 100vh" theme={grommet}>
      <ProductsPage />
    </Grommet>
  )
}

export default App
