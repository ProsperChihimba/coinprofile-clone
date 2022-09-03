import * as React from 'react'
import {
  BrowserRouter as Router,  
  useRoutes,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Container  } from '@chakra-ui/react'
import Main from './components/main'
import Login from './components/login';

const AppWrapper = () => {
  let routes = useRoutes([
    { path: "/", element: <Login /> },
    {
      path: "home", element: 
        <Container maxW={1140}>
          <Main />
        </Container>
    },
    // ...
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <ChakraProvider>
        <AppWrapper />
      </ChakraProvider>
    </Router>
  );
}

export default App;
