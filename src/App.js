import { ChakraProvider } from '@chakra-ui/react'
import { Box, Container  } from '@chakra-ui/react'
import Main from './main';

function App() {
  return (
    <ChakraProvider>
      <Container maxW={1140}>
        <Main />
      </Container>
    </ChakraProvider>
  );
}

export default App;
