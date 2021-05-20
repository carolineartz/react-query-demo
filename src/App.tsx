import { Grommet, Text, Box, grommet } from 'grommet'

import 'styled-components/macro'

function App() {
  return (
    <Grommet css="min-height: 100vh" theme={grommet}>
      <Box>
        <Text>This is some text</Text>
      </Box>
    </Grommet>
  )
}

export default App
