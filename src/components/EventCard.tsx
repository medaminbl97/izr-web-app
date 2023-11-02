import {
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Image,
  VStack,
} from "@chakra-ui/react";
interface Props {
  heading: string;
  text: string;
  bilder: string[];
}
function EventCard({ heading, text, bilder }: Props) {
  return (
    <VStack padding={{ base: 1, lg: 10 }} boxShadow="md" gap={10}>
      <GridItem area={"text"}>
        <Heading fontSize={{ base: "1xl" }}>{heading}</Heading>
        <Text align="justify" fontSize={{ base: "xs", md: "2xl", lg: "2xl" }}>
          <br />
          {text}
        </Text>
      </GridItem>
      <GridItem area={"galerie"}>
        <SimpleGrid columns={{ lg: 2, base: 1 }} gap={10}>
          {bilder.map((b) => (
            <GridItem
              transition="ease-in-out 0.5s"
              _hover={{ transform: "scale(1.3)" }}
            >
              <Image src={b} borderRadius={10} />
            </GridItem>
          ))}
        </SimpleGrid>
      </GridItem>
    </VStack>
  );
}

export default EventCard;
