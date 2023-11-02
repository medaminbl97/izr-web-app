import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { kontakts, listNames } from "./Kontakt";
import KontaktKarte from "./KontaktKarte";

function VKontakt() {
  return (
    <VStack alignItems="start">
      <Heading>Kontakt</Heading>
      <Accordion allowToggle w="100%">
        {kontakts.map((kon, index) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {listNames[index]}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <KontaktKarte
                image={kon.logo}
                name={kon.name}
                adresse={kon.adresse}
                tel={kon.tel}
                emails={kon.email}
              />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </VStack>
  );
}

export default VKontakt;
