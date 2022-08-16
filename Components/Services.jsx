import { ReactElement } from "react";
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from "@chakra-ui/react";
import { FiKey } from "react-icons/fi";
import { GiHouseKeys } from "react-icons/gi";
import { GrMoney } from "react-icons/gr";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack borderColor="black" align="center" p={0}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"black"}
        rounded={"full"}
        bg={"gray.300"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={700} color={"black"} fontSize="xl">
        {title}
      </Text>
      <Text color={"gray.600"} align="center">
        {text}
      </Text>
    </Stack>
  );
};

export default function Services() {
  return (
    <Box p={20} align="center">
      <Text
        fontSize="5xl"
        fontWeight="bold"
        color={"black"}
        paddingBottom={10}
      ></Text>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={GiHouseKeys} w={10} h={10} />}
          title={"Buy a Home"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={FiKey} w={10} h={10} />}
          title={"Rent a Home"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
        <Feature
          icon={<Icon as={GrMoney} w={10} h={10} />}
          title={"Finance a Home"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
          }
        />
      </SimpleGrid>
    </Box>
  );
}
