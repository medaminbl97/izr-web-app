import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { extendTheme, CSSReset } from "@chakra-ui/react";
import Aside from "./components/Aside";
// Supports weights 100-900
import "@fontsource-variable/raleway";
import "@fontsource/almarai";
import "@fontsource/poppins";
import Main from "./components/Main";
import PrayerTimesCalculator from "./components/prayerTimesCalculator/PrayerTimesCalculator";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins',sans-serif`,
    body: `'Poppins' ,'Almarai',sans-serif`,
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Grid
        width={"100%"}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gridTemplateColumns={{ lg: "1fr 4fr" }}
        gap={4}
      >
        <GridItem
          backgroundColor={"blackAlpha.400"}
          position={{ base: "fixed" }}
          area="nav"
          // paddingTop={5}
          zIndex={100}
          boxShadow="xs"
          width={"100%"}
          borderBottomRadius={20}
          shadow={"md"}
          overflow={"hidden"}
        >
          <NavBar />
        </GridItem>
        <GridItem
          marginTop={{ base: 20 }}
          h={{ base: "100%", lg: "90vh" }}
          area="main"
        >
          <Main />
        </GridItem>
        <Show above="lg">
          <GridItem
            borderRightRadius={10}
            area="aside"
            boxShadow="md"
            shadow={"1px 1px 5px 1px lightgray "}
            marginTop={20}
          >
            <Aside />
          </GridItem>
        </Show>
      </Grid>
      {/* <PrayerTimesCalculator /> */}
    </ChakraProvider>
  );
}

export default App;
