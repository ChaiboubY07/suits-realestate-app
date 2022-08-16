import Link from "next/link";
import Image from "next/image";
import {
  IconButton,
  Button,
  Flex,
  Stack,
  Box,
  Spacer,
  Container,
  HStack,
} from "@chakra-ui/react";

import { GiHamburgerMenu, GiHouseKeys } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { useState } from "react";

import WomanSuit from "../assets/suit.png";
import ManSuit from "../assets/suit1.png";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Flex flexDir="column">
      <Flex p="2" borderBottomWidth="4px" borderColor="black">
        <Box fontSize="4xl" color="black" fontWeight="bold">
          <Flex direction="row" align="center">
            <Image alt="logo" src={WomanSuit} width={38} height={38} />
            <Image alt="logo" src={ManSuit} width={30} height={30} />

            <Box ps="2">
              <Link href="/">Suits</Link>
            </Box>
          </Flex>
        </Box>
        <Spacer />

        <HStack spacing={100}>
          <Stack
            fontSize="md"
            color="black"
            fontWeight="medium"
            align="center"
            spacing={100}
            direction="row"
          >
            <Link href="#rent">
              <a>Rent</a>
            </Link>
            <Link href="#sale">
              <a>Buy</a>
            </Link>
            <Link href="#services">
              <a>Services</a>
            </Link>
          </Stack>
          <Button
            as={IconButton}
            icon={<GiHamburgerMenu />}
            variant="outline"
            colorScheme="black"
            _hover={{ bg: "#999999" }}
            _active={{
              transform: "scale(1.3)",
            }}
            onClick={() => setShowMenu(!showMenu)}
          ></Button>
        </HStack>
      </Flex>
      {showMenu && (
        <Flex
          p="2"
          borderBottomWidth="4px"
          borderColor="black"
          color="black"
          alignItems="center"
        >
          <Container centerContent>
            <ImHome fontSize={25} />
            <Link href="/" passHref>
              Home
            </Link>
          </Container>
          <Spacer />
          <Container centerContent>
            <BsSearch fontSize={25} />
            <Link href="/search" passHref>
              Search
            </Link>
          </Container>
          <Spacer />
          <Container centerContent>
            <GiHouseKeys fontSize={25} />
            <Link href="/search?purpose=for-sale" passHref>
              Buy Property
            </Link>
          </Container>
          <Spacer />
          <Container centerContent>
            <FiKey fontSize={25} />
            <Link href="/search?purpose=for-rent" passHref>
              Rent Property
            </Link>
          </Container>
        </Flex>
      )}
    </Flex>
  );
}
