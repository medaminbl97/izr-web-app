import { List, ListItem, Link, VStack, Button, Show } from "@chakra-ui/react";
import izr_logo_komplett from "../assets/SVG/izr_logo_komplett.svg";

import { Image } from "@chakra-ui/react";

interface Props {
  onClose?: () => void;
}

function Aside({ onClose }: Props) {
  const listItems = [
    { name: "Home", link: "#hero" },
    { name: "Akutelle Informationen", link: "#prayer" },
    { name: "Veranstalungen", link: "#events" },
    { name: "Galerie", link: "#galery" },
    { name: "Blog", link: "#events" },
    { name: "Kontakt", link: "#kontakt" },
  ];
  return (
    <VStack alignItems="center" marginTop={5}>
      <List>
        {listItems.map((listItem) => (
          <ListItem
            transition="ease 0.3s"
            padding={2}
            fontSize={"xl"}
            borderRadius={10}
            textDecoration="none"
          >
            <Link href={listItem["link"]}>
              <Button
                fontFamily={`'Poppins' ,'Almarai',sans-serif`}
                onClick={onClose}
                color={"white"}
                width={"100%"}
                backgroundColor="#034001"
                _hover={{
                  backgroundColor: "#F2CDAC",
                  color: "black",
                  transform: "scale(1.1)",
                }}
              >
                {listItem["name"]}
              </Button>
            </Link>
          </ListItem>
        ))}
      </List>
      <Show above="lg">
        <Image src={izr_logo_komplett} boxSize="60%" marginY="50px"></Image>
      </Show>
    </VStack>
  );
}

export default Aside;
