// Chakra imports
import { Flex, useColorModeValue, Image } from "@chakra-ui/react";

// Custom components
import { HorizonLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex alignItems="center" flexDirection="column">
      {/* <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} /> */}
      <Image
        w="70%"
        mb="25px"
        src={"https://game.vlrmanager.com/static/assets/images/logo-light.png"}
      />
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
