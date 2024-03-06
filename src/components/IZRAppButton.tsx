import {
  Button,
  Image,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import app from "../assets/app.png";

function IZRAppButton() {
  const [os, setOS] = useState("");
  const [link, setlink] = useState("");

  useEffect(() => {
    const detectOS = () => {
      const userAgent = window.navigator.userAgent;
      if (userAgent.match(/Android/i)) {
        setOS("Android");
      } else if (userAgent.match(/iPhone|iPad|iPod/i)) {
        setOS("iOS");
      } else {
        setOS("Unknown");
      }
    };

    detectOS();
  }, []);
  useEffect(() => {
    console.log(os);
    setlink(
      os === "iOS"
        ? "https://apps.apple.com/de/app/izr/id6470660577"
        : "https://play.google.com/store/apps/details?id=com.aminbl.izrApp&pcampaignid=web_share"
    );
  }, [os]);

  return (
    <>
      <Text fontWeight={"bold"}>
        Clicken Sie auf dem Bild und Laden sie Jetzt die IZR APP herunter 👇
        <UnorderedList margin={5}>
          <ListItem>Gebetszeiten Benachrichtigungen</ListItem>
          <ListItem>Veranstaltungen Benachrichtigungen</ListItem>
          <ListItem>Quran auf Deutsch & Arabisch</ListItem>
        </UnorderedList>
      </Text>

      <Link href={link}>
        <Image style={{ scale: "0.8" }} src={app}></Image>
      </Link>
    </>
  );
}

export default IZRAppButton;
