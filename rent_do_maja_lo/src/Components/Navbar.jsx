import logo from "../Images/logo.jpg";
import { ReactNode } from "react";
import React from "react";
import { MoonIcon, SunIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Radio,
  RadioGroup,
  Heading,
  Image
} from "@chakra-ui/react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Slide,
  Link,
  IconButton,
  Button,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
const Links = ["rentdomajalo", "Projects", "Team"];
export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const [placement, setPlacement] = React.useState("top");
  const sendto=useNavigate()
  const handleClick = () => setShow(!show);

  return (
    <>
      <Box>
        <Box
          justifyContent={"space-between"}
          style={{ margin: "auto", borderRadius: "20px" }}
          // width={"1200px"}
          bg={useColorModeValue("white", "gray.900")}
          px={4}
        >
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <img
                  style={{ borderRadius: "20px" }}
                  width={"60px"}
                  src={logo}
                  alt=""
                />
              </Box>
             
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((el)=><NavLink>{el}</NavLink>)}
              </HStack>
               <Button colorScheme="blue" onClick={onOpen}>
             <Search2Icon />
            </Button>
            </HStack>
           
            <RadioGroup
              defaultValue={placement}
              onChange={setPlacement}
            ></RadioGroup>
            
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody>
                  <InputGroup
                  
                    justifyContent={"space-around"}
                    size="md"
                  >
                    <Input
                      // ml={["20px", "50px", "100px"]}
                      pr="4.5rem"
                   
                      color={colorMode === "light" ? "black" : "white"}
                      bg={colorMode === "light" ? "gray.200" : "gray.900"}
                      type={"text"}
                      placeholder="Search For The Products"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        bg={colorMode === "light" ? "gray.200" : "gray.900"}
                        h="1.75rem"
                        size="sm"
                        onClick={[handleClick,onClose]}
                      >
                        <Search2Icon boxSize={5} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <Flex
              //  w={"300px"}
              w="280px"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Button
                variant={"solid"}
                bg={"red.500"}
                size={"sm"}
                mr={4}
                p={5}
                color="white"
                leftIcon={<AddIcon />}
              >
                LOGIN/SIGNUP
              </Button>
              <Button onClick={()=>sendto("/cart")}><Image w={6} src={"https://cdn2.iconfinder.com/data/icons/economic-part-3/100/shopping-basket-64.png"} /></Button>
              <Button
                aria-label="Toggle Color Mode"
                onClick={toggleColorMode}
                _focus={{ boxShadow: "none" }}
                w="fit-content"
                {...props}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Text noOfLines={1}>Hanumat</Text>
                </MenuButton>
                <MenuList style={{ borderRadius: "20px" }}>
                  <MenuItem>My Account</MenuItem>
                  <MenuDivider />
                  <MenuItem>Wish List</MenuItem>
                  <MenuDivider />
                  <MenuItem>Setting</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                dasboard
              </Stack>
            </Box>
          ) : null}
        </Box>

        <Box p={4}></Box>
      </Box>
    </>
  );
}
