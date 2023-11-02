import { Heading, Image, VStack, Text } from "@chakra-ui/react";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <VStack w="100%">
      <Image
        src={heroImage}
        maxW="100%"
        borderRadius={{ base: "10px", lg: "10px" }}
      />
      ;
      <Heading
        _hover={{ transform: "scale(1.1)" }}
        transition="ease 0.5s"
        fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}
      >
        Herzlich Willkommen
      </Heading>
      <Text align="center" fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
        in der offziellen Webseite des islamischen Zentrum in Regensburg
      </Text>
    </VStack>
  );
}

export default Hero;
