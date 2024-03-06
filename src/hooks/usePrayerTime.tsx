import axios from "axios";
import { useState, useEffect } from "react";
import izr_server from "../config/urls";

interface PrayerT {
  Date: string;
  Fajr: string;
  Shuruq: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
  Jumaa: string;
}

function usePrayerTime() {
  const [todayPrayerTimes, setTodayPrayerTimes] = useState<PrayerT>();

  useEffect(() => {
    axios
      .get<PrayerT>(izr_server.url + "/getPrayers")
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
