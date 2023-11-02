import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  VStack,
} from "@chakra-ui/react";
import KontaktKarte from "./KontaktKarte";
import izr_logo_k from "../assets/SVG/izr_logo_komplett.svg";
import fam from "../assets/SVG/fam.svg";
import frau from "../assets/SVG/frau.svg";
import schul from "../assets/SVG/schul.svg";
import vorstand from "../assets/SVG/vorstand.svg";
import vorstand_2 from "../assets/SVG/vorstand.svg";
import best from "../assets/SVG/best.svg";
import g_halter from "../assets/SVG/g_halter.svg";
import haus_v from "../assets/SVG/haus_v.svg";
import sport from "../assets/SVG/Sport.svg";

export const kontakts = [
  {
    logo: izr_logo_k,
    name: "Islamisches Zentrum Regensburg e.V",
    adresse: [
      "Moschee Ar-Rahman",
      "Alte-Straubinger-Str. 33",
      "93055 Regensburg",
    ],
    email: ["info@iz-regensburg.com"],
    tel: ["094138203839", "017660800940"],
  },
  {
    logo: vorstand,
    name: "Harethe El Ouadhane",
    adrese: [""],
    email: ["h.elouadhane@iz-regensburg.de", "vorstand@iz-regensburg.de"],
    tel: ["017660800940"],
  },

  {
    logo: vorstand_2,
    name: "Samir Zouaoui",
    adrese: [""],
    email: ["s.zouaoui@iz-regensburg.de"],
    tel: ["0176 77014567"],
  },
  {
    logo: schul,
    name: "Mohamed Ali Sassi",
    adrese: [""],
    email: ["m.sassi@iz-regensburg.de", "schule@iz-regensburg.de"],
    tel: ["0176 63166025"],
  },
  {
    logo: frau,
    name: "Sarah El Ouadhane",
    adrese: [""],
    email: ["s.elouadhane@iz-regeneburg.de"],
    tel: ["0176 24705680"],
  },
  {
    logo: fam,
    name: "Harethe El Ouadhane",
    adrese: [""],
    email: ["h.elouadhane@iz-regensburg.de"],
    tel: ["0176 60800940"],
  },
  {
    logo: best,
    name: "Mohammed Riahi",
    adrese: [""],
    email: ["m.riahi@iz-regensurg.de"],
    tel: ["0176 32499359"],
  },
  {
    logo: g_halter,
    name: "Ahmed Trabelsi",
    adrese: [""],
    email: ["a.trabelsi@iz-regensburg.de"],
    tel: ["0157 80815519"],
  },
  {
    logo: haus_v,
    name: "Najeh Bouzgarrou",

    email: ["verwaltung@iz-regeneburg.de", "n.bouzgarrou@iz-regensburg.de"],
    tel: ["0176 72652638"],
  },
  {
    logo: sport,
    name: "Harethe El Ouadhane",
    adrese: [""],
    email: ["h.elouadhane@iz-regeneburg.de", "ijr@iz-regensburg.de"],
    tel: ["  017660800940"],
  },
];
export const listNames = [
  "IZR",
  "Vorstand",
  "Vertretung",
  "Schulunterricht",
  "Frauen",
  "Familien & Kinder",
  "Islamische Bestattungen",
  "Gebäudehalter",
  "Hausverwaltung",
  "Sport & Jugend",
];
function Kontakt() {
  return (
    <VStack alignItems="start">
      <Heading>Kontakt</Heading>
      <Tabs>
        <TabList>
          {listNames.map((name) => (
            <Tab>{name}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {kontakts.map((kontakt) => (
            <TabPanel>
              <KontaktKarte
                image={kontakt.logo}
                name={kontakt.name}
                adresse={kontakt.adresse}
                tel={kontakt.tel}
                emails={kontakt.email}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </VStack>
  );
}

export default Kontakt;
