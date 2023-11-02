import { Card, CardBody, Heading, Image, Text, HStack } from "@chakra-ui/react";

interface Props {
  image: string;
  name: string;
  emails: string[];
  tel: string[];
  adresse?: string[];
}

function KontaktKarte({ image, name, emails, tel, adresse }: Props) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        src={image}
        alt="Caffe Latte"
        boxSize={{ base: "300px", sm: "200px" }}
        padding="10px"
      />

      <HStack>
        <CardBody>
          <Heading size="md" fontWeight="extrabold">
            {name}
          </Heading>
          {adresse?.map((ad) => (
            <Text fontStyle="italic">{ad}</Text>
          ))}
          {emails.length === 1 ? (
            <Text fontWeight="bold">E-mail</Text>
          ) : (
            <Text fontWeight="bold">E-mails</Text>
          )}
          {emails.map((email) => (
            <Text fontStyle="italic">{email}</Text>
          ))}
          <Text fontWeight="bold">Tel : </Text>
          {tel.map((t) => (
            <Text fontStyle="italic">{t}</Text>
          ))}
        </CardBody>
      </HStack>
    </Card>
  );
}

export default KontaktKarte;
