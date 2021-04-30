import React from 'react';
import { Box, ChakraProvider, Flex, Image } from '@chakra-ui/react';
import theme from './theme.js';

import Header from './component/Header.js';
import Hero from './component/Hero.js';
import Personality from './component/Personality.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex
        minH="100vh"
        maxW="100%"
        flexDir="column"
        textAlign={['center', 'start']}
      >
        <Hero />
        <Box h="40">
          <Box position="relative" left="-12%">
          <Image src="/images/Group 118.png" />
          </Box>
        </Box>
        <Personality />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
