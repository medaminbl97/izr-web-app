import { Text, Heading, VStack, HStack } from "@chakra-ui/react";
import usePrayerTime from "../hooks/usePrayerTime";

import { FiSunrise, FiSunset } from "react-icons/fi";
import { PiSunDimDuotone, PiSunDuotone } from "react-icons/pi";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaMosque } from "react-icons/fa";
import { MdWbTwilight } from "react-icons/md";
import PrayerName from "./PrayerName";

function PrayerTimes() {
  const todayPrayerTimes = usePrayerTime();
  const prayers = [
    {
      nameDe: "Fajr",
      icon: <MdWbTwilight></MdWbTwilight>,
      nameAr: "الفجر",
      time: todayPrayerTimes?.Fajr,
    },
    {
      nameDe: "Shuruq",
      icon: <FiSunrise></FiSunrise>,
      nameAr: "الشروق",
      time: todayPrayerTimes?.Shuruq,
    },
    {
      nameDe: "Dhuhr",
      icon: <PiSunDimDuotone></PiSunDimDuotone>,
      nameAr: "الظهر",
      time: todayPrayerTimes?.Dhuhr,
    },
    {
      nameDe: "Asr",
      icon: <PiSunDuotone></PiSunDuotone>,
      nameAr: "العصر",
      time: todayPrayerTimes?.Asr,
    },
    {
      nameDe: "Maghrib",
      icon: <FiSunset></FiSunset>,
      nameAr: "المغرب",
      time: todayPrayerTimes?.Maghrib,
    },
    {
      nameDe: "Ishaa",
      icon: <BsMoonStarsFill></BsMoonStarsFill>,
      nameAr: "العشاء",
      time: todayPrayerTimes?.Isha,
    },
    {
      nameDe: "Jumaa",
      icon: <FaMosque></FaMosque>,
      nameAr: "الجمعـة",
      time: todayPrayerTimes?.Jumaa,
    },
  ];

  return (
    <VStack gap={10}>
      <Heading>Gebetszeiten</Heading>
      <HStack gap={{ base: 2, lg: 20 }}>
        <VStack>
          {prayers.map((pr) => (
            <PrayerName
              lang="de"
              content={pr.nameDe}
              children={pr.icon}
            ></PrayerName>
          ))}
        </VStack>
        <VStack>
          {prayers.map((pr) => (
            <Text marginY={2}>{pr.time}</Text>
          ))}
        </VStack>
        <VStack>
          {prayers.map((pr) => (
            <PrayerName
              lang="ar"
              content={pr.nameAr}
              children={pr.icon}
            ></PrayerName>
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
}

export default PrayerTimes;
