import {
  Image,
  VStack,
  Text,
  Heading,
  useClipboard,
  Button,
  useFocusEffect,
} from "@chakra-ui/react";
import basmala from "../assets/SVG/basmala.svg";
import { FiCopy } from "react-icons/fi";
import { useEffect } from "react";

function Spenden() {
  const { onCopy, setValue } = useClipboard("");

  useEffect(() => {
    setValue("DE30750500000026765156");
  }, []);
  return (
    <VStack alignItems="start" gap={10}>
      <Heading>Spenden</Heading>
      <Image src={basmala} w="100%" h={{ lg: 20, base: 10 }}></Image>
      <Text
        fontFamily={`'Raleway' ,'Almarai',sans-serif`}
        align="center"
        fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
      >
        مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللّهِ كَمَثَلِ
        حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنبُلَةٍ مِّئَةُ حَبَّةٍ
        وَاللّهُ يُضَاعِفُ لِمَن يَشَاء وَاللّهُ وَاسِعٌ عَلِيمٌ
      </Text>

      <Text align="center" fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
        Der Zustand derer, die ihr Vermögen auf Allahs Weg verwenden (ausgeben)
        , gleicht einem Samenkorn, der sieben Ähren trägt (ausgibt) , hundert
        Körner in jeder Ähre. Allah gibt, indem er es (seine Gaben) um das
        Vielfache für wen Er will, vermehrt. Und Allah ist Vasi (der alles
        umfasst, dessen Güte reichlich ist) , Alim (Allwissend).
      </Text>

      <VStack
        alignItems={"start"}
        backgroundColor="gray.100"
        padding={{ lg: 10, base: 5 }}
        borderRadius={10}
      >
        <Text
          fontWeight="bold"
          align="center"
          fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
        >
          Bitte auf dem Konto des Zentrums überweisen wie unten gezeigt :
        </Text>
        <Text align="left" fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}>
          Empfänger: <strong>Islamisches Zentrum Regensburg </strong>
          <br />
          Bank: <strong>DE30750500000026765156 </strong>
          <br />
          BIC: <strong>BYLADEM1RGB </strong>
          <br />
          <br />
          <Button colorScheme="green" onClick={onCopy} rightIcon={<FiCopy />}>
            IBAN kopieren
          </Button>
        </Text>
      </VStack>
    </VStack>
  );
}

export default Spenden;
