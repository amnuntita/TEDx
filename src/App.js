import React from 'react';
import { ChakraProvider, Flex } from '@chakra-ui/react';
import theme from './theme.js';

import Header from './component/Header.js';
import Hero from './component/Hero.js';
import Personality from './component/Personality.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex minH="100vh" maxW="100%" flexDir="column" textAlign={["center","start"]}>
       <Hero /> 
       <Personality />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
