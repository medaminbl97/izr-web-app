import axios from "axios";
import { useState, useEffect } from "react";

interface PrayerT {
  Date: string;
  Fajr: string;
  Shuruq: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  jumaa: string;
}

function usePrayerTime() {
  const [todayPrayerTimes, setTodayPrayerTimes] = useState<PrayerT>();

  useEffect(() => {
    axios
      .get<PrayerT>("https://izr-cloud.online/getPrayers")
      .then((res) => {
        setTodayPrayerTimes(res.data);
      })

      .catch((error) => {
        console.error("Error loading JSON file:", error);
      });
  }, []);

  return todayPrayerTimes;
}

export default usePrayerTime;
