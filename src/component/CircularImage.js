import React from "react";
import { Box, Image, VStack,Text } from "@chakra-ui/react";

const CircularImage = (props) => {
    return(<VStack w="9rem" ml="2">
        <Image src={props.src} borderRadius="full" alt="image" w="7rem" className={props.animation}/>
        <Text fontWeight="bold">{props.text ?? "text not found"}</Text>
    </VStack>)
}

export default CircularImage;