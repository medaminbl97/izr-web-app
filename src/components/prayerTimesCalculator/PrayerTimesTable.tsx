import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  VStack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { CSVLink } from "react-csv";

interface TableLine {
  Asr: string;
  Dhuhr: string;
  Maghrib: string;
  Isha: string;
  Datum: string;
  Hijri: string;
  Fajr: string;
}

interface props {
  prayers: TableLine[];
  stadt: string;
}

function PrayerTimesTable({ prayers, stadt }: props) {
  const headers = Object.keys(prayers[0]);
  const csvData = [headers, ...prayers.map((obj) => Object.values(obj))];
  const handleSubmit = () => {
    // Create a Blob with the CSV data
    const csvContent = csvData.map((row) => row.join(";")).join("\n");
    const blob = new Blob(["\ufeff", csvContent], {
      type: "text/csv;charset=utf-8;",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "prayer_times_" + stadt + ".csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <VStack width={"100%"}>
      <Button
        fontFamily={`'Poppins' ,'Almarai',sans-serif`}
        onClick={() => handleSubmit()}
        color={"white"}
        margin={4}
        width={"100%"}
        backgroundColor="#034001"
        _hover={{
          backgroundColor: "#F2CDAC",
          color: "black",
          transform: "scale(1.1)",
        }}
      >
        in csv Datei runterladen
      </Button>
      <Table width={"100%"} variant="simple">
        <Thead>
          <Tr>
            <Th>Datum</Th>
            <Th>Hijri</Th>
            <Th>Fajr</Th>
            <Th>Dhuhr</Th>
            <Th>Asr</Th>
            <Th>Maghrib</Th>
            <Th>Isha</Th>
          </Tr>
        </Thead>
        <Tbody>
          {prayers.map((line, index) => (
            <Tr key={index}>
              <Td>{line.Datum}</Td>
              <Td>{line.Hijri}</Td>
              <Td>{line.Fajr}</Td>
              <Td>{line.Dhuhr}</Td>
              <Td>{line.Asr}</Td>
              <Td>{line.Maghrib}</Td>
              <Td>{line.Isha}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
}

export default PrayerTimesTable;
