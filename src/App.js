import { ChakraProvider } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import Main from './main';

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Main />
      </Box>
    </ChakraProvider>
  );
}

export default App;
