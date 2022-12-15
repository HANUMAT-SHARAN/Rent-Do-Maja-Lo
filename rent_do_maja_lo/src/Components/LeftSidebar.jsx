import React, { ReactNode } from "react";
import ProductCard from "../Components/ProductCard";
import logo from "../Images/logo.jpg";
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
import { IconType } from "react-icons";
import { ReactText } from "react";

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function SimpleSidebar(
  { children }: { children: ReactNode },
  props
) {
  const { title1 } = props;
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

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const [data, setData] = React.useState([]);

  const [cat,setCat]=React.useState("livingroom")
  const [checked,setCheck]=React.useState(2)

  React.useEffect(() => {
    getdata(cat);
  }, [cat]);

  const getdata = (cat) => {
    axios
      .get(`http://localhost:3000/furniture?category=${cat}`)
      .then((res) => setData(res.data));
  };
  const setcategory=(f)=>{
    setCheck(f[0])
    if(f[0]==1&&f[1]==true){
      setCat("bedroom")
    }else if(f[0]==2&&f[1]==true){
      setCat("livingroom")
    }else if(f[0]==3&&f[1]==true){
      setCat("kitchen")
    }else if(f[0]==4&&f[1]==true){
      setCat("wfm") 
    }
  }

  const Checkboxarr = [
    { title: "Bed Room",id:1 },
    { title: "Living Room",id:2 },

    { title: "Kitchen & Dining",id:3 },
    { title: "Work From Home (WFM)",id:4 },
  ];
  const [sliderValue, setSliderValue] = React.useState(5);
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        borderRight="1px"
        borderRightColor={useColorModeValue("gray.200", "gray.700")}
        w={{ base: "full", md: 300 }}
        pos="fixed"
        h="full"
        {...rest}
      >
        <Flex
          borderRadius={"5px"}
          p={5}
          border="2px solid #E2E8F0"
          justifyContent={"space-between"}
        >
          <Flex w={30} justifyContent={"space-between"} alignItems="center">
            <Image
              w={8}
              src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-8-1/1024/filter8-64.png"
            ></Image>
            <Text>Filters</Text>
          </Flex>
          <Button onClick={()=>setCat("livingroom")} color="white" bg={"red.500"} pr={7} pl={7}>
            RESET
          </Button>
        </Flex>

        <Container borderRadius={"5px"} mt={5} p={5} border="2px solid #E2E8F0">
          {" "}
          <Flex justifyContent={"space-between"}>
            <Text textAlign={"left"}> CHOOSE RENTAL TENURE</Text>
            <Image
              w={7}
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-64.png"
            ></Image>
          </Flex>
          <Slider
            id="slider"
            defaultValue={6}
            min={3}
            max={12}
            colorScheme="red"
            onChange={(v) => setSliderValue(v)}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <SliderMark value={3} mt="1" ml="-2.5" fontSize="sm">
              3
            </SliderMark>
            <SliderMark value={6} mt="1" ml="-2.5" fontSize="sm">
              6
            </SliderMark>
            <SliderMark value={9} mt="1" ml="-2.5" fontSize="sm">
              9
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

        {/* <Slider
      id='slider'
      defaultValue={6}
      min={3}
      max={12}
      colorScheme='red'
     
      onChange={(v) => setSliderValue(v)}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <SliderMark value={3} mt='1' ml='-2.5' fontSize='sm'>
        3
      </SliderMark>
      <SliderMark value={6} mt='1' ml='-2.5' fontSize='sm'>
       6
      </SliderMark>
      <SliderMark value={9} mt='1' ml='-2.5' fontSize='sm'>
        9
      </SliderMark>
      <SliderMark value={12} mt='1' ml='-2.5' fontSize='sm'>
        12
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <Tooltip
        hasArrow
        bg='red.500'
        color='white'
        placement='top'
        isOpen={showTooltip}
        label={`${sliderValue}`}
      >
        <SliderThumb />
      </Tooltip>
    </Slider> */}
        <Container borderRadius={"5px"} mt={5} p={5} border="2px solid #E2E8F0">
          <Stack spacing={[1, 5]}>
            <Flex alignItems={"center"} textAlign={"left"}>
              {" "}
              <Image
                w={5}
                src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/star-64.png"
                alt="star"
              ></Image>
              <Text ml={1}>CATEGORIES</Text>
            </Flex>

            {Checkboxarr.map((el) => (
              <Checkbox
                size="md"
                onChange={(e) => setcategory([el.id,e.target.checked])}
                colorScheme="red"
                isChecked={el.id==checked?true:false}
              
              
              >
                {el.title}
              </Checkbox>
            ))}
          </Stack>
        </Container>

        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />

        {LinkItems.map((link) => (
          <NavItem key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </Box>
      {/* Th
      is Is the Place where all the Data Appending Will Be Going to Happen */}

      <SimpleGrid
        columns={[1,2,3]}
        spacing={[0,9,10]}
      
         ml={[0,0,350]}
        textAlign="right"
     
       
      >
        {data.map((el) => (
          <ProductCard
            img={el.img}
            price={el.price}
            title={el.title}
            dimg={el.deliveryicon}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
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

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
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
