import { Button, Link, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { MdCall } from "react-icons/md";

interface Props {
  onClose?: () => void;
}

function KontaktButtons({ onClose }: Props) {
  const [Filled, setFilled] = useState(false);
  return (
    <Stack
      direction={{ base: "column", lg: "row" }}
      width={{ base: "100%", lg: "auto" }}
      gap={4}
      paddingX={4}
    >
      <Link href="#donate">
        <Button
          width={{ base: "100%" }}
          fontFamily={`'Poppins' ,'Almarai',sans-serif`}
          onClick={onClose}
          rightIcon={Filled ? <AiFillHeart /> : <AiOutlineHeart />}
          onMouseOver={() => setFilled(true)}
          onMouseOut={() => setFilled(false)}
          variant="solid"
          color={"white"}
          backgroundColor="#034001"
          _hover={{
            backgroundColor: "#F2CDAC",
            color: "black",
            transform: "scale(1.1)",
          }}
        >
          Spenden
        </Button>
      </Link>
      <Link href="#kontakt">
        <Button
          width={{ base: "100%" }}
          fontFamily={`'Poppins' ,'Almarai',sans-serif`}
          onClick={onClose}
          padding={5}
          rightIcon={<MdCall />}
          backgroundColor="#034001"
          color={"white"}
          variant="solid"
          _hover={{
            backgroundColor: "#F2CDAC",
            color: "black",
            transform: "scale(1.1)",
          }}
        >
          Call us
        </Button>
      </Link>
      <Link href="https://www.instagram.com/islamischeszentrumregensburg_/">
        <Button
          width={{ base: "100%" }}
          _hover={{
            backgroundColor: "#F2CDAC",
            color: "black",
            transform: "scale(1.1)",
          }}
          fontFamily={`'Poppins' ,'Almarai',sans-serif`}
          onClick={onClose}
          color={"white"}
          backgroundColor="#034001"
          rightIcon={<BsInstagram />}
        >
          Instagram
        </Button>
      </Link>
    </Stack>
  );
}

export default KontaktButtons;
