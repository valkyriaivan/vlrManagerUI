// Chakra imports
import {
  AvatarGroup,
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
// Assets
import { useState } from "react";
import { PlayerCard } from "./PlayerCard";

export default function PlayerFullCard(props: { player: any }) {
  const { player } = props;
  const textColorBid = useColorModeValue("brand.500", "white");

  return (
    <Card p="20px">
      <Flex direction={{ base: "column" }} justify="center">
        {/* <Box mb={{ base: "20px", "2xl": "20px" }} position="relative"> */}
        {/* <Image
            src={image}
            w={{ base: "100%", "3xl": "100%" }}
            h={{ base: "100%", "3xl": "100%" }}
            borderRadius="20px"
          /> */}
        <Center>
          <PlayerCard player={player.player} />
        </Center>
        {/* </Box> */}
        <Flex flexDirection="column" justify="space-between" h="100%">
          <Flex
            align={{
              base: "center",
              md: "start",
              lg: "center",
              xl: "start",
              "2xl": "center",
            }}
            justify="space-between"
            direction={{
              base: "row",
              md: "column",
              lg: "row",
              xl: "column",
              "2xl": "row",
            }}
            mt="25px"
          >
            <Text fontWeight="700" fontSize="sm" color={textColorBid}>
              Price: {player.price}💰
            </Text>
            <Link
              href={"download"}
              mt={{
                base: "0px",
                md: "10px",
                lg: "0px",
                xl: "10px",
                "2xl": "0px",
              }}
            >
              <Button
                variant="darkBrand"
                color="white"
                fontSize="sm"
                fontWeight="500"
                borderRadius="70px"
                px="24px"
                py="5px"
              >
                Sign player
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Card>
  );
}
