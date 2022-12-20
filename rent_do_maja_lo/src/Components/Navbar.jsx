import logo from "../Images/logo.jpg";
import { ReactNode } from "react";
import React from "react";
import { MoonIcon, SunIcon, Search2Icon, LockIcon } from "@chakra-ui/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PinInput, PinInputField } from "@chakra-ui/react";
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
  Image,
  SimpleGrid,
  InputLeftAddon,
  theme,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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
import { AuthContext } from "../Context/AuthContext";

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
const Links = ["Rent Do Maja Lo"];
export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const [error, setError] = React.useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const [placement, setPlacement] = React.useState("top");
  const [mainid, setMainid] = React.useState();
  const [signupdone, setSignupdone] = React.useState(false);
  const sendto = useNavigate();
  const handleClick = () => setShow(!show);
  const [userdata, setUserdata] = React.useState({});
  const [loginuser, setlogiuser] = React.useState({});
  const [present, setPresentusers] = React.useState([]);

  const { login,isAuth,logout } = React.useContext(AuthContext);
  const openmodal = () => {
    isOpen();
  };
  const closemodal = () => {
    onClose();
  };
  const handlechange = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
      ["otp"]: Math.floor(Math.random() * 100000),
    });
    const isError =
      userdata.password.length >= 8 && userdata.password.includes("$");
    setError(isError);
    console.log(isError);
  };
const navito=useNavigate()

  React.useEffect(() => {
    getusersdata();
  }, []);
  console.log(userdata);
  const registeruser = async () => {
    try {
      let data = await fetch(`http://localhost:3000/userserver`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userdata),
      });
      setTimeout(() => {
        const sme = toast.success(`Your Login PIN Is ${userdata.otp}`, {
          theme: "colored",
          position: "top-center",
        });
      }, 5000);
    } catch (error) {
      console.log("error ", error);
    }
    const s = toast.success("Your Account Has Been Successfuly Created", {
      theme: "colored",
      position: "top-center",
    });
    setSignupdone(true);
    getusersdata()
  };
 
  const getusersdata = async () => {
    try {
      let data = await fetch(`http://localhost:3000/userserver`);
      let res = await data.json();
      console.log(res);
      setPresentusers(res);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handlelogin = (e) => {
   
    setlogiuser({ ...loginuser, [e.target.name]: e.target.value });
    
  };
 
  

  const Logintheuser = () => {
    for (let i = 0; i <= present.length - 1; i++) {
      if (
        Number(loginuser.otp) == present[i].otp &&
        loginuser.phonenumber == present[i].phonenumber
      ) {
        login(present[i].name);
        const notify=toast.success("Logined Successfuly",{theme:"colored",postion:"top-center"})
       notify()
      }
      
    }
   
  };
 
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
                {Links.map((el) => (
                  <NavLink>{el}</NavLink>
                ))}
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
                  <InputGroup justifyContent={"space-around"} size="md">
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
                        onClick={[handleClick, onClose]}
                      >
                        <Search2Icon boxSize={5} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </DrawerBody>
              </DrawerContent>
            </Drawer>

            <Flex
           
             width={400}
              alignItems={"center"}
              justifyContent="space-evenly"
            >
              
               
             
                {!isAuth.auth?<Button
                  onClick={() => [setMainid(1), openmodal()]}
                  variant={"solid"}
                  bg={"red.500"}
                  size={"sm"}
                  mr={4}
                  p={5}
                  color="white"
                >
                  <LockIcon />
                  SIGNUP
                </Button>:null}
                {!isAuth.auth?<Button
                  onClick={() => [setMainid(2), openmodal()]}
                  variant={"solid"}
                  bg={"red.500"}
                  size={"sm"}
                  mr={4}
                  p={5}
                  color="white"
                >
                    <LockIcon />
                  LOGIN
                </Button>:null}
              
            
             {isAuth.auth? <Button bg="blue.400" onClick={() => sendto("/cart")}>
                <Image
                  w={6}
                  src={
                    "https://cdn2.iconfinder.com/data/icons/economic-part-3/100/shopping-basket-64.png"
                  }
                />
              </Button>:null}
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
                  {isAuth.auth?<Text noOfLines={1}>{isAuth.name}</Text>:null}
                </MenuButton>
                <MenuList style={{ borderRadius: "20px" }}>
                  <MenuItem  ><Button  variant={"solid"}
                  bg={"blue.500"}
                  size={"sm"}
                  mr={4}
                  p={5}
                  color="white" onClick={()=>navito("/admin")}>Admin Account</Button></MenuItem>
                  <MenuDivider />
                  <MenuItem>Wish List</MenuItem>
                  <MenuDivider />
                  <MenuItem>Setting</MenuItem>
                  <MenuDivider />
                  <MenuItem > <Button  variant={"solid"}
                  bg={"red.500"}
                  size={"sm"}
                  mr={4}
                  p={5}
                  color="white" onClick={logout}>Logout</Button></MenuItem>
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
          <Modal
            size={"3xl"}
            isOpen={mainid == 1 ? onOpen : null}
            onClose={() => [setMainid(0), closemodal()]}
          >
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
              <ModalHeader align="center ">
                Enter Your Details To Signup{" "}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={10}>
                <SimpleGrid columns={[1, 2, 2]}>
                  <Box>
                    <Image src="https://www.rentomojo.com/public/images/smartAuth/cat-happy.svg" />
                  </Box>
                  <Stack spacing={3}>
                    <Text>Enter your Name </Text>
                    <Input
                      name="name"
                      onChange={(e) => handlechange(e)}
                      type="text"
                      placeholder="Name"
                    />
                    <Text>Enter Your Email</Text>

                    <Input
                      onChange={(e) => handlechange(e)}
                      name="email"
                      placeholder="Email"
                      type="email"
                    />
                    <Text>Enter Your Password</Text>
                    <Text color={"red"} fontSize={"13"}>
                      {error === false
                        ? "Please Enter Min 8 digit Password And It Should Have $"
                        : null}
                    </Text>
                    <Input
                      isInvalid={error ? false : true}
                      onChange={(e) => handlechange(e)}
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                    <Text>Enter Your Phone Number</Text>
                    <InputGroup>
                      <InputLeftAddon children="+91" />
                      <Input
                        onChange={(e) => handlechange(e)}
                        name="phonenumber"
                        type="number"
                        placeholder="Number"
                      />
                    </InputGroup>
                    <Button
                      disabled={error ? false : true}
                      onClick={() => registeruser()}
                      bg={"blue.500"}
                    >
                      Get OTP
                    </Button>
                  </Stack>
                </SimpleGrid>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal
            size={"2xl"}
            isOpen={mainid == 2 ? onOpen : null}
            onClose={() => [setMainid(0), closemodal()]}
          >
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
              <ModalHeader align="center ">
                Enter Your Details To Login{" "}
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={10}>
                <SimpleGrid columns={[1, 2, 2]}>
                  <Box>
                    <Image src="https://www.rentomojo.com/public/images/smartAuth/cat-happy.svg" />
                  </Box>
                  <Stack spacing={3}>
                    <Text>Enter Your Phone Number</Text>
                    <InputGroup>
                      <InputLeftAddon children="+91" />
                      <Input
                        onChange={(e) => handlelogin(e)}
                        name="phonenumber"
                        type="number"
                        placeholder="Number"
                      />
                    </InputGroup>
                    <Text>Enter Your Pin</Text>
                    <HStack>
                      <Input
                        onChange={(e) => handlelogin(e)}
                        name="otp"
                        type="number"
                        placeholder="PIN"
                      />
                    </HStack>
                    <Button onClick={() => Logintheuser()} bg={"blue.500"}>
                      Login Now
                    </Button>
                  </Stack>
                </SimpleGrid>
              </ModalBody>
            </ModalContent>
          </Modal>
        </Box>
        <ToastContainer />
        <Box p={4}></Box>
      </Box>
    </>
  );
}
