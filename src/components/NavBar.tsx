import { HStack, Image, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import logo from "../assets/Clock 1.png";

export const NavBar = () => {
  return (
    // <HStack justifyContent="space-between" padding="10x"></HStack>
    <HStack bg="gray">
      <Image src={logo} boxSize="60px" />
      <Text>Schedule Manager </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
