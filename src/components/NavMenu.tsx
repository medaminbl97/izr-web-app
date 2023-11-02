import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import Aside from "./Aside";
import KontaktButtons from "./KontaktButtons";
import { CiMenuFries } from "react-icons/ci";

function NavMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="green"
        onClick={onOpen}
        rightIcon={<CiMenuFries />}
        color={"white"}
        backgroundColor="#034001"
        _hover={{
          backgroundColor: "#F2CDAC",
          color: "black",
          transform: "scale(1.1)",
        }}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay w="90%" h="100%" />
        <DrawerContent>
          <DrawerCloseButton onClick={onClose} />

          <DrawerBody>
            <VStack alignItems="center">
              <Aside onClose={onClose}></Aside>
              <KontaktButtons onClose={onClose} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavMenu;
