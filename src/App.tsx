import { Grommet, Box, grommet } from 'grommet'

import 'styled-components/macro'
import { ProductList } from './components/ProductList'

function App() {
  return (
    <Grommet css="min-height: 100vh" theme={grommet}>
      <Box fill>
        <ProductList />
      </Box>
    </Grommet>
  )
}

export default App
