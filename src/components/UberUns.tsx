import { Grid, GridItem, Heading, Image, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/SVG/izr_logo_komplett.svg";

function UberUns() {
  return (
    <VStack alignItems="start">
      <Heading>Über Uns</Heading>
      <Grid
        padding={{ base: 5, lg: 10 }}
        gap={10}
        templateAreas={{
          base: `"logo" "description"`,
          lg: `"logo description"`,
        }}
        gridTemplateColumns={{ lg: "1fr 4fr" }}
      >
        <GridItem>
          <Image src={logo} />
        </GridItem>
        <GridItem area="description">
          <Text
            align="justify"
            fontSize={{ base: "1xl", md: "2xl", lg: "2xl" }}
          >
            Die Stiftung führt den Namen{" "}
            <strong>Islamische Stiftung Regensburg</strong> . Sie ist eine
            rechtsfähige Stiftung des bürgerlichen Rechts mit Sitz in
            Regensburg. Zweck der Stiftung ist die Förderung der islamischen
            Religion, Kultur und Tradition sowie die Integration der Muslime in
            die deutsche Gesellschaft. In diesem Rahmen fördert die Stiftung
            auch die Bildung und Erziehung, die Altenhilfe und die Toleranz auf
            allen Gebieten der Kultur und der Völkerverständigung. In geeigneten
            Fällen kann die Stiftung hilfsbedürftige Muslime unterstützen.
          </Text>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default UberUns;
