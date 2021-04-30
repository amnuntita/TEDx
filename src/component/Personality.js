import { Box, Button, Grid, Image, Text, VStack } from '@chakra-ui/react';

import CircularImage from './CircularImage.js';

const Personality = () => {
  return (
    <VStack
      justify="center"
      textAlign="center"
      maxW="100%"
      mb="8"
      spacing="12"
    >
   
    <Text fontSize="2xl" fontWeight="bold" maxW="100%" mx={2}>
        Dogs have these 5 major personality types
      </Text>
    <Grid templateColumns="repeat(5, 1fr)" maxW="100%" overflow={["scroll","hidden"]}>
          <CircularImage src="/images/icon-2.png" text="Confident" animation="rotate" />
          <CircularImage src="/images/icon-3.png" text="Shy" animation="rotate" />
          <CircularImage src="/images/icon-4.png" text="Independent" animation="rotate" />
          <CircularImage src="/images/icon-5.png" text="Laidback" animation="rotate" />
          <CircularImage src="/images/icon-1.png" text="Adaptable" animation="rotate"/>
      </Grid>
      <Button
        mt="4"
        bg="#84c3c8"
        className="shaking"
      >
        Learn More
      </Button>
    </VStack>
  );
};

export default Personality;
