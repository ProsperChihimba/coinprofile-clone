import { ChakraProvider } from '@chakra-ui/react'
import { Container  } from '@chakra-ui/react'
import Main from './main';
import Login from './login';

function App() {
  return (
    <ChakraProvider>
      {/* <Container maxW={1140}>
        <Main />
      </Container> */}
      <Login />
    </ChakraProvider>
  );
}

export default App;
