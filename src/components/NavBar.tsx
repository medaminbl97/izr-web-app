import { HStack, Heading, Hide, Image, Show, Stack } from "@chakra-ui/react";
import izr_logo from "../assets/SVG/izr_logo.svg";
import NavMenu from "./NavMenu";
import KontaktButtons from "./KontaktButtons";
// Supports weights 100-900
const NavBar = () => {
  return (
    <Stack
      padding={"15px"}
      flex={"flex"}
      direction={"row"}
      alignItems="center"
      justifyContent={"space-around"}
      backgroundColor={"whiteAlpha.900"}
      zIndex={100}
    >
      <HStack>
        <Image src={izr_logo} boxSize="60px" marginRight={4}></Image>
        <Heading fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
          Islamisches Zentrum Regensburg
        </Heading>
      </HStack>

      <Hide above="lg">
        <NavMenu />
      </Hide>

      <Show above="lg">
        <KontaktButtons />
      </Show>
    </Stack>
  );
};

export default NavBar;
