import { GridItem, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import B1 from "../images/galerie/1.jpg";
import B2 from "../images/galerie/2.jpg";
import B3 from "../images/galerie/3.jpg";
import B4 from "../images/galerie/4.jpg";
import B5 from "../images/galerie/5.jpg";
import B6 from "../images/galerie/6.jpg";
import B7 from "../images/galerie/7.jpg";
import B8 from "../images/galerie/8.jpg";
import B9 from "../images/galerie/9.jpg";
import B10 from "../images/galerie/10.jpg";
import B11 from "../images/galerie/11.jpg";
import B12 from "../images/galerie/12.jpg";
import B13 from "../images/galerie/13.jpg";
import B14 from "../images/galerie/14.jpg";
import B15 from "../images/galerie/15.jpg";
import B16 from "../images/galerie/16.jpg";
import B17 from "../images/galerie/17.jpg";
import B18 from "../images/galerie/18.jpg";
import B19 from "../images/galerie/19.jpg";
import B20 from "../images/galerie/20.jpg";
import B21 from "../images/galerie/21.jpg";

function Galerie() {
  const imgs = [
    B1,
    B2,
    B3,
    B4,
    B5,
    B6,
    B7,
    B8,
    B9,
    B10,
    B11,
    B12,
    B13,
    B14,
    B15,
    B16,
    B17,
    B18,
    B19,
    B20,
    B21,
  ];
  return (
    <>
      <Heading paddingBottom={{ lg: 20, md: 10 }}>Galerie</Heading>
      <SimpleGrid gap={5} columns={{ lg: 3, md: 3, base: 2 }}>
        {imgs.map((img) => (
          <GridItem
            transition="ease-in-out 0.5s"
            _hover={{ transform: "scale(1.1)" }}
            area={img}
            overflow="hidden"
            display="flex"
            alignItems="center"
          >
            <Image src={img} borderRadius={10} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
}

export default Galerie;
