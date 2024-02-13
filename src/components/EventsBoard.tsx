import { VStack, Heading, Stack, Card, Text, Image } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";

interface event {
  date: string;
  description: string;
  flyer: string;
  id: string;
  subtitle: string;
  title: string;
}

interface resp {
  events: event[];
}

export default function EventsBoard() {
  const [events, setEvents] = React.useState<event[]>([]);
  const [noEvent, setNoEvents] = React.useState(true);

  useEffect(() => {
    axios.get<resp>("https://izr-cloud.online/getEvents/all").then((res) => {
      res.data.events[0].flyer ===
      "https://izr-cloud.online/getEvents/No_Events.jpg"
        ? setNoEvents(true)
        : setNoEvents(false);
      setEvents(res.data.events);
      console.log(res);
      console.log(noEvent);
    });
  }, []);
  return (
    <Stack gap={10} direction={"column"}>
      <Heading>Veranstalungen</Heading>
      {noEvent && (
        <Stack
          spacing={10}
          direction={{ lg: "row", base: "column" }}
          flex={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Card width={{ lg: "50%", base: "60%" }}>
            <Image src={events[0]?.flyer}></Image>
          </Card>
          <Stack>
            <Heading>Aktuelle Veranstaltungen </Heading>
            <Text>
              Wir haben im Moment keine Veranstaltungen. Bitte beachten Sie,
              dass zukünftige Veranstaltungen andgekündigt werden.
            </Text>
          </Stack>
        </Stack>
      )}
      {!noEvent &&
        events.map((event) => (
          <Stack
            key={event.id}
            direction={{ lg: "column", base: "column" }}
            spacing={10}
          >
            <Stack
              display={"flex"}
              flexDirection={{ lg: "row", base: "column" }}
              width={{ lg: "100%", base: "100%" }}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Image
                src={event.flyer}
                alt={event.title}
                boxSize={{ lg: "33%", base: "100%" }}
                objectFit="cover"
              />
              <VStack>
                <Heading
                  textAlign="center"
                  fontSize={{ lg: "2.5vw", base: "6vw" }}
                >
                  {event.title}
                </Heading>
                <Heading
                  textAlign="center"
                  fontSize={{ lg: "2vw", base: "5vw", md: "1vw" }}
                >
                  {event.subtitle}
                </Heading>
              </VStack>
            </Stack>
            <Text textAlign="justify" fontSize={{ lg: "1.5vw", base: "3.8vw" }}>
              {event.description}
            </Text>
          </Stack>
        ))}
    </Stack>
  );
}
