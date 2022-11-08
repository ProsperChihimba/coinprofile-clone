import * as React from 'react'
import {
  BrowserRouter as Router,  
  useRoutes,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Container  } from '@chakra-ui/react'
import Main from './components/dashboard/main'
import Login from './components/dashboard/login';
import { MainWeb } from './components/web';
import Balance from './components/dashboard/balance';
import Cards from './components/dashboard/cards';

const AppWrapper = () => {
  let routes = useRoutes([
  { path: "/", element: <MainWeb /> },
    { path: "/signin", element: <Login /> },
    {
      path: "home", element: 
        <Container maxW={1140}>
          <Main />
        </Container>
    },
    {
      path: "balance", element: 
        <Container maxW={1140}>
          <Balance />
        </Container>
    },
    {
      path: "cards", element: 
        <Container maxW={1140}>
          <Cards />
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
