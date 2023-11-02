import { Hide, Show, StackItem, VStack } from "@chakra-ui/react";
import Kontakt from "./Kontakt";
import Hero from "./Hero";
import VKontakt from "./VKontakt";
import UberUns from "./UberUns";
import Galerie from "./Galerie";
import Spenden from "./Spenden";
import PrayerTimes from "./PrayerTimes";
import Events from "./Events";

function Main() {
  return (
    <VStack h="100%" overflow="scroll" gap={50} padding={{ base: 5, lg: 10 }}>
      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
        id="hero"
      >
        <Hero />
      </StackItem>
      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
        id="prayer"
      >
        <PrayerTimes />
      </StackItem>

      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
        id="kontakt"
      >
        <Show above="xl">
          <Kontakt />
        </Show>
        <Hide above="xl">
          <VKontakt />
        </Hide>
      </StackItem>
      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
      >
        <UberUns />
      </StackItem>
      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
        id="events"
      >
        <Events />
      </StackItem>
      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
        id="donate"
      >
        <Spenden />
      </StackItem>
      <StackItem
        boxShadow="md"
        w="100%"
        borderRadius={10}
        padding={{ base: 5, lg: 10 }}
        id="galery"
      >
        <Galerie />
      </StackItem>
    </VStack>
  );
}

export default Main;
