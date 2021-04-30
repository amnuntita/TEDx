import {
  Box,
  Button,
  VStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';
const Hero = () => {
  return (
    
    <Stack direction={['column-reverse', 'row']} spacing="0" mb="5">
      <VStack spacing="2" w={['100vw', '40vw']} justifyContent="center" mt="9">
        <Box w={{base:"85%",xl:"80%"}}>
          <Text fontSize={["3xl","5xl"]} fontWeight="bold">
            What's meant to be will always find a way.
          </Text>
          <Text fontSize={"xl"} my="3">
            PawsUp help you to find the best partner for your dearest fluffy
            friend
          </Text>
          <Button
            my="4"
            bg="#e87078"
            className="shaking" 
          >
            Find A Match
          </Button>
        </Box>
      </VStack>

      <Box
        w={['100vw', '60vw']}
        h={{base:"45vh",md:"50vh",lg:"50vh",xl:"80vh"}}
        bgGradient="linear(to-t, #fed0d0,#feecec)"
        overflow="hidden"
        position="relative"
        borderBottomLeftRadius="100px"
        display="flex"
        justifyContent="center"
      >
        <Image
          src="/images/Group 18.png"
          position="absolute"
          top="-10%"
          right="0"
          zIndex="0"
        />
        <Image
          src="/images/hero.png"
          objectFit="cover"
          position="absolute"
          zIndex="1"
          top="10%"
        />
      </Box>
    </Stack>
    
  );
};

export default Hero;
