import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  lang: string;
  content: string;
  children: ReactNode;
}

function PrayerName({ lang, content, children }: Props) {
  return lang === "de" ? (
    <Button
      fontFamily={`'Poppins' ,'Almarai',sans-serif`}
      w={{ base: "115px", lg: "200px" }}
      display="flex"
      justifyContent="space-between"
    >
      {content}
      {children}
    </Button>
  ) : (
    <Button
      fontFamily={`'Poppins' ,'Almarai',sans-serif`}
      w={{ base: "115px", lg: "200px" }}
      display="flex"
      justifyContent="space-between"
    >
      {children}
      {content}
    </Button>
  );
}

export default PrayerName;
