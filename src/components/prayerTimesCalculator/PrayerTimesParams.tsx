import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import izr_server from "../../config/urls";
import PrayerTimesTable from "./PrayerTimesTable";
import { truncate } from "fs";

interface TableLine {
  Asr: string;
  Dhuhr: string;
  Maghrib: string;
  Isha: string;
  Datum: string;
  Hijri: string;
  Fajr: string;
}

function PrayerTimesParams() {
  const [stadt, setStadt] = useState("Aachen");
  const [cities, setCities] = useState([]);
  const [buttonText, setButtonText] = useState("Rechnen");
  const [buttonState, setButtonState] = useState(false);
  const [sdate, setSdate] = useState({ d: 1, m: 1, y: 2024 });
  const [edate, setEdate] = useState({ d: 1, m: 1, y: 2024 });
  const [prayers, setPrayers] = useState<TableLine[]>([]);
  const [error, setError] = useState({ d: 0, m: 0, y: 0 });

  useEffect(() => {
    axios.get(izr_server.url + "/getCities/").then((response) => {
      setCities(response.data["cities"]);
      // console.log(response.data["cities"]);
    });
  }, []);

  useEffect(() => {
    if (stadt !== undefined && !error.d && !error.m && !error.y) {
      setButtonState(true);
    }
    console.log(stadt);
    console.log(error);
  }, [stadt, error]);

  const handleSubmit = () => {
    setButtonText("einen Moment ...");
    axios
      .post(izr_server.url + "/calculTimes/", {
        city_name: stadt,
        start_date: sdate,
        end_date: edate,
      })
      .then((response) => {
        console.log(response.data);
        setPrayers(response.data);
        setButtonText("Aktualisieren");
      });
    // console.log(sdate);
    // console.log(edate);
  };
  return (
    <Stack
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading>Gebetszeiten für ein Zeitraum rechnen</Heading>
      <FormControl>
        <FormLabel>Stadt</FormLabel>
        <Stack display={"flex"} flexDir={{ lg: "row", base: "column" }}>
          <Select
            width={{ lg: "30%", base: "100%" }}
            onChange={(e) => {
              setStadt(e.currentTarget.value);
            }}
          >
            {cities.map((c) => (
              <option>{c}</option>
            ))}
          </Select>
          <Text>Angfangsdatum:</Text>
          <Input
            type="number"
            onChange={(e) => {
              setSdate({ ...sdate, d: Number(e.currentTarget.value) });
              Number(e.currentTarget.value) > 31 ||
              Number(e.currentTarget.value) < 1
                ? setError({ ...error, d: 1 })
                : setError({ ...error, d: 0 });
            }}
            width={{ lg: "5vw", base: "100%" }}
            placeholder="D"
            value={sdate.d}
          />
          <Input
            type="number"
            onChange={(e) => {
              setSdate({ ...sdate, m: Number(e.currentTarget.value) });
              Number(e.currentTarget.value) > 12 ||
              Number(e.currentTarget.value) < 1
                ? setError({ ...error, m: 1 })
                : setError({ ...error, m: 0 });
            }}
            width={{ lg: "5vw", base: "100%" }}
            placeholder="M"
            value={sdate.m}
          />
          <Input
            type="number"
            onChange={(e) => {
              setSdate({ ...sdate, y: Number(e.currentTarget.value) });
              Number(e.currentTarget.value) > edate.y ||
              Number(e.currentTarget.value) < 2020
                ? setError({ ...error, y: 1 })
                : setError({ ...error, y: 0 });
            }}
            width={{ lg: "10vw", base: "100%" }}
            placeholder="Y"
            value={sdate.y}
          />
          <Text>Enddatum:</Text>
          <Input
            type="number"
            onChange={(e) => {
              setEdate({ ...edate, d: Number(e.currentTarget.value) });
              Number(e.currentTarget.value) > 31 ||
              Number(e.currentTarget.value) < 1
                ? setError({ ...error, d: 1 })
                : setError({ ...error, d: 0 });
            }}
            width={{ lg: "5vw", base: "100%" }}
            placeholder="D"
            value={edate.d}
          />
          <Input
            type="number"
            onChange={(e) => {
              setEdate({ ...edate, m: Number(e.currentTarget.value) });
              Number(e.currentTarget.value) > 12 ||
              Number(e.currentTarget.value) < 1
                ? setError({ ...error, m: 1 })
                : setError({ ...error, m: 0 });
            }}
            width={{ lg: "5vw", base: "100%" }}
            placeholder="M"
            value={edate.m}
          />
          <Input
            type="number"
            onChange={(e) => {
              setEdate({ ...edate, y: Number(e.currentTarget.value) });
              Number(e.currentTarget.value) < sdate.y ||
              Number(e.currentTarget.value) > sdate.y + 2
                ? setError({ ...error, y: 1 })
                : setError({ ...error, y: 0 });
            }}
            width={{ lg: "10vw", base: "100%" }}
            placeholder="Y"
            value={edate.y}
          />
        </Stack>
        {Boolean(error.d) && (
          <Text color={"red"}>Bitte geben sie eine Tagezahl passend ein !</Text>
        )}
        {Boolean(error.m) && (
          <Text color={"red"}>
            Bitte geben sie eine Monatezahl passend ein !
          </Text>
        )}
        {Boolean(error.y) && (
          <Text color={"red"}>
            Bitte geben sie eine Jahrezahl passend ein!. Beachten Sie folgendes
            : Anfangsjahr kann nicht fürher als 2020 sein, und Endjahr darf max
            2 Jahre später als Anfangsjahr sein{" "}
          </Text>
        )}
        <Button
          fontFamily={`'Poppins' ,'Almarai',sans-serif`}
          onClick={() => handleSubmit()}
          color={"white"}
          // margin={4}
          width={"100%"}
          backgroundColor="#034001"
          _hover={{
            backgroundColor: "#F2CDAC",
            color: "black",
            transform: "scale(1.01)",
          }}
          isDisabled={!buttonState}
          marginTop={5}
        >
          {buttonText}
        </Button>
      </FormControl>
      {prayers.length && <PrayerTimesTable prayers={prayers} stadt={stadt} />}
    </Stack>
  );
}

export default PrayerTimesParams;
