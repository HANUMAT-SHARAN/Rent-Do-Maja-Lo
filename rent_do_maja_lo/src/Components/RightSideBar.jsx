import React, { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { CheckCircleIcon, InfoIcon } from "@chakra-ui/icons";
import "../Pages/carousel.css" 
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Image,
  Container,
  Button,
  Stack,
  Checkbox,
  SimpleGrid,
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
import Loader from "../Components/Loader";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip,
  Heading,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function SimpleSidebar(props) {
  const { children, showmodal } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

const SidebarContent = ({ ...rest }) => {
  const [data, setData] = React.useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const fref = React.useRef(null);
  const [sliderValue, setSliderValue] = React.useState(12);
  const { id } = useParams();
  console.log(sliderValue);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const [modalid, setModalid] = React.useState();
  const closeModal = () => {
    onClose();
  };

  const showmodal = () => {
    onOpen();
  };

  React.useEffect(() => {
    showdata(id);
  }, [id]);

  const showdata = async (id) => {
    try {
      let product = await fetch(`http://localhost:3000/furniture/${id}`);
      let res = await product.json();
      setData(res);
    } catch (error) {
      console.log("error ", error);
    }
  };
  const estimatearr = [
    {
      img: "https://www.rentomojo.com/public/images/exchange/evaluate.svg",
      title: "Evaluate and Estimate",
    },
    {
      img: "https://www.rentomojo.com/public/images/exchange/exchange-quote.svg",
      title: "Get instant exchange quote",
    },
    {
      img: "https://www.rentomojo.com/public/images/exchange/place-order.svg",
      title: "Place order for new device",
    },
    {
      img: "https://www.rentomojo.com/public/images/exchange/cahsify-money.svg",
      title: "Get exchange value from Cashify",
    },
    {
      img: "https://www.rentomojo.com/public/images/exchange/device-exchange.svg",
      title: "Old device picked up by Cashify",
    },
    {
      img: "https://www.rentomojo.com/public/images/exchange/device-delivered.svg",
      title: "New device is delivered",
    },
  ];
  const tenuresarr = [
    {
      title: "Compare All Rental ----- tenures",
      t1: " Savings on monthly rental",
      t2: " Savings on monthly rental",
      t3: "Free relocation",
      t4: "Free upgrade",
      t5: " 7 Days free trial",
      i1: "https://www.rentomojo.com/public/images/product/compare-tenure/savings-on-monthly-rental.svg",
      i2: "https://www.rentomojo.com/public/images/product/compare-tenure/early-closure-charge.svg",
      i3: "https://www.rentomojo.com/public/images/product/compare-tenure/free-relocation.svg",
      i4: "https://www.rentomojo.com/public/images/product/compare-tenure/free-upgrade.svg",
      i5: "https://www.rentomojo.com/public/images/product/compare-tenure/7-days-free-trial.svg",
    },
    {
      title: `Min 6 month Tenure ----- ₹ ${data.price}`,
      t1: "0%",
      t2: "1.25 Month's Rent",
      t3: "After 6 months",
      t4: "After 36 months",
      t5: "Yes",
      i1: "https://www.rentomojo.com/public/images/product/compare-tenure/savings-on-monthly-rental.svg",
      i2: "https://www.rentomojo.com/public/images/product/compare-tenure/early-closure-charge.svg",
      i3: "https://www.rentomojo.com/public/images/product/compare-tenure/free-relocation.svg",
      i4: "https://www.rentomojo.com/public/images/product/compare-tenure/free-upgrade.svg",
      i5: "https://www.rentomojo.com/public/images/product/compare-tenure/7-days-free-trial.svg",
    },
    {
      title: `Min 12 Month Tenure    ---- ₹ ${data.price - 100}`,
      t1: "11%",
      t2: "1.5 Month's Rent",
      t3: "After 6 months",
      t4: "After 36 months",
      t5: "Yes",
      i1: "https://www.rentomojo.com/public/images/product/compare-tenure/savings-on-monthly-rental.svg",
      i2: "https://www.rentomojo.com/public/images/product/compare-tenure/early-closure-charge.svg",
      i3: "https://www.rentomojo.com/public/images/product/compare-tenure/free-relocation.svg",
      i4: "https://www.rentomojo.com/public/images/product/compare-tenure/free-upgrade.svg",
      i5: "https://www.rentomojo.com/public/images/product/compare-tenure/7-days-free-trial.svg",
    },
  ];

  return (
    <div>
      <Flex>
        <Box
          bg={useColorModeValue("white", "gray.900")}
          borderRight="1px"
          borderRightColor={useColorModeValue("gray.200", "gray.700")}
          w={{ base: "full", md: 350 }}
          right={0}
          pos="absolute"
          {...rest}
        >
          <Flex
            borderRadius={"5px"}
            p={2}
            border="2px solid #E2E8F0"
            justifyContent={"space-around"}
          >
            {data.title} {<CheckCircleIcon />}
          </Flex>

          <Container
          w={"full"}
            borderRadius={"5px"}
            mt={5}
            p={5}
            border="2px solid #E2E8F0"
          >
            {" "}
            <Flex
              p={2}
              borderRadius={10}
              bg={"blue.100"}
              justifyContent={"space-between"}
            >
              <Text fontSize={13} textAlign={"left"}>
                How Long You Want to Rent This?
              </Text>
              <Image
                w={7}
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-64.png"
              ></Image>
            </Flex>
            <Slider
              mt={3}
              id="slider"
              defaultValue={12}
              min={6}
              max={12}
              colorScheme="red"
              onChange={(v) => setSliderValue(v)}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <SliderMark value={6} mt="1" ml="-2.5" fontSize="sm">
                6
              </SliderMark>

              <SliderMark value={12} mt="1" ml="-2.5" fontSize="sm">
                12
              </SliderMark>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <Tooltip
                hasArrow
                bg="red.500"
                color="white"
                placement="top"
                isOpen={showTooltip}
                label={`${sliderValue}`}
              >
                <SliderThumb />
              </Tooltip>
            </Slider>
          </Container>

          <Flex justifyContent={"space-between"} borderRadius={"5px"} mt={5}>
            <Box
              display={"block"}
              alignItems={"center"}
              p={4}
              border="2px solid #E2E8F0"
            >
              <Text mt={3} fontSize={22}>
                {" "}
                ₹ {sliderValue === 12 ? data.price - 100 : data.price}/mon
              </Text>
              <Text fontSize={10}>Monthly Rent </Text>
            </Box>
            <Box p={7} border="2px solid #E2E8F0">
              <Text fontSize={22}>₹ {2 * data.price}</Text>
              <Text fontSize={10}>Refundable Deposit </Text>
            </Box>
          </Flex>
          <Flex
            mt={2}
            border="2px solid #E2E8F0"
            justifyContent={"space-between"}
          >
            <Box p={2} fontSize={10}>
              {" "}
              <CheckCircleIcon /> 7 Days Free Trail
            </Box>
            <Box p={2} fontSize={10}>
              {" "}
              <CheckCircleIcon /> Free Relocation
            </Box>
            <Box p={2} fontSize={10}>
              {" "}
              <CheckCircleIcon /> Free updgrades
            </Box>
            <Box color={"#53bec0"} p={2} fontSize={10}>
              View All
            </Box>
          </Flex>
          <Button
            onClick={() => [setModalid(1), showmodal()]}
            border={"1px solid #53bec0"}
            bg={"white"}
            mt={2}
            w={"full"}
            p={5}
          >
            <Text fontSize={15} color={"#53bec0"}>
              Compare All Tenures
            </Text>{" "}
          </Button>

          <Flex
            m={1}
            p={1}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Flex w={200} justifyContent={"space-between"}>
              <Image
                alt="fdf"
                src={
                  "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
                }
              />
              <Text>
                Delivery By {new Date().getDate() + 4}-
                {new Date().getMonth() + 1}-{new Date().getFullYear()}
              </Text>
            </Flex>
            <InfoIcon />
          </Flex>
          <Button color="white" bg={"#dc4024"} w={"full"}>
            <Image
              w={6}
              mr={2}
              src="https://cdn2.iconfinder.com/data/icons/economic-part-3/100/shopping-basket-64.png"
              alt="cart"
            />
            Book Your Plan
          </Button>
          <Container mt={2} p={3} bg="#f5f7fa">
            <Text mt={3} textAlign={"left"}>
              Exchange Offer
            </Text>
            <Container mt={3} bg="white" border={"1px solid #e2eaf0"}>
              <Flex
                p={1}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Flex
                  mr={5}
                  w={"300px"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Image src="https://www.rentomojo.com/public/images/icons/exchange.svg" />
                  <Text fontSize={11}>
                    {" "}
                    Exchange Offer Upgrade Your Smartphone
                  </Text>
                </Flex>
                <Button
                  onClick={() => [setModalid(2), showmodal()]}
                  color="53bec0"
                  border={"1px solid #53bec0"}
                  bg={"white"}
                  w={"full"}
                >
                  <Text fontSize={14}>Get Estimation</Text>
                </Button>
              </Flex>
            </Container>
            <Text mt={3} textAlign={"left"}>
              Special Offers
            </Text>
            <Container bg="white" mt={3} border={"1px solid #e2eaf0"}>
              <Flex
                p={1}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Flex
                  mr={5}
                  w={"300px"}
                  alignItems={"center"}
                  justifyContent={"space-around"}
                >
                  <Image src="https://www.rentomojo.com/public/images/icons/exchange.svg" />
                  <Text fontSize={11}>
                    {" "}
                    Exchange Offer Upgrade Your Smartphone
                  </Text>
                </Flex>
                <Button
                  color="53bec0"
                  border={"1px solid #53bec0"}
                  bg={"white"}
                  w={"full"}
                >
                  <Text fontSize={14}>Get Estimation</Text>
                </Button>
              </Flex>
            </Container>
          </Container>
          <Modal
            size={"4xl"}
            finalFocusRef={fref}
            isOpen={modalid == 2 ? onOpen : null}
            onClose={() => [setModalid(1), closeModal()]}
          >
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
              <ModalHeader textAlign={"center"}>
                How to Does Rento Exchange Work?
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={10}>
                <SimpleGrid
                  textAlign={"center"}
                  columns={[1, 2, 3]}
                  spacing="20px"
                >
                  {estimatearr &&
                    estimatearr.map((el) => (
                      <Box
                        borderRadius={"20px"}
                        border={"1px solid #ebebeb"}
                        p={10}
                        align="center"
                      >
                        <Image src={el.img} /> <Text>{el.title}</Text>
                      </Box>
                    ))}
                </SimpleGrid>
              </ModalBody>
            </ModalContent>
          </Modal>
          <Modal
            size={"6xl"}
            finalFocusRef={finalRef}
            isOpen={modalid == 1 ? isOpen : null}
            onClose={onClose}
          >
            <ModalOverlay
              bg="blackAlpha.300"
              backdropFilter="blur(10px) hue-rotate(90deg)"
            />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <SimpleGrid  spacing={"30px"} columns={[1, 2, 3]}>
                  {tenuresarr &&
                    tenuresarr.map((el) => (
                      <Container borderRadius={"20px"}  className="tenuresmodal"  >
                        <Box mb="5">
                          <Heading fontSize={26}>{el.title}</Heading>
                        </Box>
                        <Flex
                        borderRadius={"20px"}
                          w={320}
                          border={"1px solid #ebebeb"}
                          p={7}
                          align={"center"}
                          justifyContent={"space-between"}
                        >
                          <Image w={45} src={el.i1} alt={""} />{" "}
                          <Text>{el.t1}</Text>{" "}
                        </Flex>
                        <Flex
                         borderRadius={"20px"}
                          w={320}
                          border={"1px solid #ebebeb"}
                          p={7}
                          align={"center"}
                          justifyContent={"space-between"}
                        >
                          <Image w={45} src={el.i2} alt={""} />{" "}
                          <Text>{el.t2}</Text>{" "}
                        </Flex>
                        <Flex
                          w={320}
                          borderRadius={"20px"}
                          border={"1px solid #ebebeb"}
                          p={7}
                          align={"center"}
                          justifyContent={"space-between"}
                        >
                          <Image w={45} src={el.i3} alt={""} />{" "}
                          <Text>{el.t3}</Text>{" "}
                        </Flex>
                        <Flex borderRadius={"20px"}
                          w={320}
                          border={"1px solid #ebebeb"}
                          p={7}
                          align={"center"}
                          justifyContent={"space-between"}
                        >
                          <Image w={45} src={el.i4} alt={""} />{" "}
                          <Text>{el.t4}</Text>{" "}
                        </Flex>
                        <Flex borderRadius={"20px"}
                          w={320}
                          border={"1px solid #ebebeb"}
                          p={7}
                          align={"center"}
                          justifyContent={"space-between"}
                        >
                          <Image w={45} src={el.i5} alt={""} />{" "}
                          <Text>{el.t5}</Text>{" "}
                        </Flex>
                      </Container>
                    ))}
                </SimpleGrid>
              </ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
          <ToastContainer />
          <CloseButton
            display={{ base: "flex", md: "none" }}
            onClick={onClose}
          />

          {/* Nav items were her like home */}
        </Box>
      </Flex>

      <ToastContainer />
    </div>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
