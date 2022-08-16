import React from "react";
import Image from "next/image";

import {
  IconButton,
  Button,
  Flex,
  Text,
  Box,
  Spacer,
  Container,
  HStack,
} from "@chakra-ui/react";
import Background from "../assets/background.jpg";

const Hook = () => {
  return (
    <Box w="full">
      <Flex paddingTop={5}>
        <Image alt="hook" src={Background} />
        <Text
          pos="absolute"
          left={120}
          paddingTop={170}
          fontSize="5xl"
          fontWeight="bold"
          color="black"
        >
          Get a Suit...
        </Text>
        <Text
          pos="absolute"
          left={400}
          paddingTop={225}
          fontSize="5xl"
          fontWeight="bold"
          color="black"
        >
          Get a Home
        </Text>
      </Flex>
    </Box>
  );
};

export default Hook;
