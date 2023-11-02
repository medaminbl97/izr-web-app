import EventCard from "./EventCard";
import fussballB1 from "../images/fußballturnier/10.jpg";
import fussballB2 from "../images/fußballturnier/11.jpg";
import fussballB3 from "../images/fußballturnier/12.jpg";
import fussballB4 from "../images/fußballturnier/9.jpg";

import eidB1 from "../images/eidfest/1.jpg";
import eidB2 from "../images/eidfest/2.jpg";
import eidB3 from "../images/eidfest/3.jpg";
import eidB4 from "../images/eidfest/4.jpg";

import buergerB1 from "../images/bürgerfest/1.jpg";
import buergerB2 from "../images/bürgerfest/2.jpg";
import buergerB3 from "../images/bürgerfest/3.jpg";
import buergerB4 from "../images/bürgerfest/4.jpg";

import { Button, Heading, Stack, VStack } from "@chakra-ui/react";
import useText from "../hooks/useText";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useState } from "react";

interface Event {
  heading: string;
  textfile: string;
  bilder: string[];
}

function Events() {
  const events = [
    {
      heading:
        " Einigendes Interreligiöses Fußballturnier am SV Burgweinting Fußballfeld",
      textfile: "ftt.txt",
      bilder: [fussballB1, fussballB2, fussballB3, fussballB4],
    },
    {
      heading:
        "Kulinarische Vielfalt und Gemeinschaftssinn: Islamisches Zentrum Regensburg beim Bürgerfest am Dom",
      textfile: "buergerFest.txt",
      bilder: [buergerB1, buergerB2, buergerB3, buergerB4],
    },

    {
      heading:
        "Freude und Feierlichkeit beim Eidfest in der Moschee des Islamischen Zentrums Regensburg",
      textfile: "eidFest.txt",
      bilder: [eidB1, eidB2, eidB3, eidB4],
    },
  ];
  const eventTextFiles = ["ftt.txt", "buergerFest.txt", "eidFest.txt"];
  const [currentFile, setCurrentFile] = useState<string>("ftt.txt");
  const [currentEvent, setCurrentEvent] = useState<Event>(events[0]);

  const text = useText(currentFile, currentFile);
  const getNextEvent = () => {
    const index = eventTextFiles.indexOf(currentFile);
    if (index < eventTextFiles.length - 1) {
      setCurrentFile(eventTextFiles[index + 1]);
      setCurrentEvent(events[index + 1]);
    } else {
      setCurrentFile(eventTextFiles[0]);
      setCurrentEvent(events[0]);
    }

    console.log(currentEvent);
    console.log(currentFile);
  };
  return (
    <VStack alignItems="start">
      <Stack direction={"row"} justifyContent="space-between" wrap="wrap">
        <Heading>Veranstaltungen</Heading>
        <Button
          onClick={() => getNextEvent()}
          rightIcon={<AiOutlineArrowRight />}
        >
          Nächste
        </Button>
      </Stack>
      <EventCard
        heading={currentEvent.heading}
        text={text}
        bilder={currentEvent.bilder}
      ></EventCard>
      ;
    </VStack>
  );
}

export default Events;
