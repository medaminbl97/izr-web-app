import { VStack } from "@chakra-ui/react";
import React from "react";
import PrayerTimesParams from "./PrayerTimesParams";
import PrayerTimesTable from "./PrayerTimesTable";

function PrayerTimesCalculator() {
  return (
    <VStack>
      <PrayerTimesParams />
    </VStack>
  );
}

export default PrayerTimesCalculator;
