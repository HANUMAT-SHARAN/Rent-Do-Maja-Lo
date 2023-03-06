import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import RightSideBar from "../Components/ElectronicRight";
import React from "react";
import ReactAppStoreBadge from "react-app-store-badge";
import Footer from "../Components/Footer";
import ModalShow from "../Components/Modal";
import { Button, Container, SimpleGrid } from "@chakra-ui/react";
import Question from "../Components/Question";
import { useParams } from "react-router-dom";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import "../Pages/carousel.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";
export default function SingleElectronicsPage(props) {
  const [data, setData] = React.useState({});

  const { id } = useParams();
  console.log(id);

  React.useEffect(() => {
    showdata(id);
  }, [id]);

  const showdata = async (id) => {
    try {
      let product = await fetch(
        `https://rent-do-maja-lo.onrender.com//electronics/${id}`
      );
      let res = await product.json();
      setData(res);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const rentarr = [
    {
      title: "Relocate for free when you move",
      img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/relocation.svg",
      des: "Changing your house or even your city? We'll relocate your rentals for free within the city or to any of our eight operational cities!",
    },
    {
      title: "Easy returns, no questions asked",
      img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png",
      des: "If you don't like the product you receive on delivery, you can return it right away. We'll initiate the refund of your deposit within 24 hours.",
    },
    {
      title: "Furniture as good as new",
      img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/2.png",
      des: "Quality matters to you, and us! That's why our team does a thorough quality-check for every product, so it reaches you in a condition as good as new.",
    },
    {
      title: "Free maintenance and annual cleaning",
      img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/common/1.png",
      des: "We offer maintenance for your product after 12 months and annual cleaning—free of cost, so you can sit back and relax.",
    },
    {
      title: "Keep upgrading to newer designs",
      img: "https://www.rentomojo.com/public/images/product/app-benefits/icons/furniture/5.png",
      des: "Bored of the same product and style? Just upgrade after 12 months to try another design and enjoy the change!",
    },
  ];

  return (
    <>
      <Navbar />
      <PagesNavbar />
      <Flex display={["block", "block", "flex", "flex"]}>
        <Box display={["block", "none"]}>
          <RightSideBar url={"hanumat"} />
        </Box>
        <Flex m={"auto"} ml={[4, 5]}>
          <Box>
            <Image
              m="auto"
              h={[300, 500]}
              borderRadius={20}
              box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              width={["auto",800]}
              mb={5}
              src={data.img}
            />
            <Tabs   m="auto"            width={"auto"}  isFitted variant="unstyled">
              <TabList mb="1em">
                <Tab _selected={{ color: "white", bg: "blue.500" }}>
                  <Text fontSize="20px">Why Rent From Us?</Text>
                </Tab>
                <Tab _selected={{ color: "white", bg: "green.400" }}>
                  <Text fontSize="20px">Product Details</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <SimpleGrid
                    columns={[1, 2]}
                    justifyContent={"space-between"}
                    textAlign={"left"}
                  >
                    <Box>
                      <Heading mb={6} fontSize={"20px"}>
                        Relocate for free when you move
                      </Heading>{" "}
                      <Text color="gray.500">
                        Changing your house or even your city? We'll relocate{" "}
                        <br /> your rentals for free within the city or to any
                        of our 8 <br />
                        operational cities!
                      </Text>
                    </Box>
                    <Image
                      border={"1px solid grey"}
                      p={5}
                      borderRadius={10}
                      src="https://www.rentomojo.com/public/images/product/app-benefits/product.png"
                    />
                  </SimpleGrid >

                  {rentarr &&
                    rentarr.map((el) => (
                      <SimpleGrid  columns={[1,2]} gap={2} m="auto"
                      p={4}
                        boxShadow={
                          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
                        }
                        id="rentusdiv"
                        align={"center"}
                        borderRadius={20}
                        mb={5}
                        justifyContent={"space-between"}
                        textAlign={"left"}
                      >
                        <Image m="auto" w={100} src={el.img} />{" "}
                        <Box >
                          <Text mb="2" fontSize={17}>
                            {el.title}
                          </Text>
                          <Text color="gray.500">{el.des}</Text>
                        </Box>
                      </SimpleGrid>
                    ))}
                  <Question />
                </TabPanel>
                <TabPanel>
                  {/* Tab 2 data */}
                  <Heading textAlign={"left"} mb={5}>
                    Product Details
                  </Heading>
                  <SimpleGrid
                    columns={[1, 1, 1, 2]}
                    textAlign={"left"}
                    direction={{ base: "column", sm: "row" }}
                    overflow="hidden"
                    variant="outline"
                  >
                    <Image
                      m="auto"
                      objectFit="cover"
                      w={[250, 400]}
                      borderRadius={10}
                      src={data.img}
                      alt="Caffe Latte"
                    />

                    <SimpleGrid columns={[1, 1, 1, 1]}>
                      <SimpleGrid
                        columns={[1, 1, 1, 1]}
                        borderRadius={10}
                        p={5}
                        boxShadow={
                          "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                        }
                        border={"1px solid "}
                      >
                        <Heading
                          borderRadius={10}
                          p={5}
                          boxShadow={
                            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                          }
                          mb={10}
                          size="md"
                        >
                          Product {"-->"} {data.title}
                        </Heading>

                        <Text
                          p={5}
                          borderRadius={10}
                          boxShadow={
                            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                          }
                          color={"gray.500"}
                          py="2"
                        >
                          Put up your feet and let your sofa have the perfect
                          companion with the Garfield Ottoman. Use it as a
                          footstool or spare seating to welcome guests, it'll
                          match any decor or home seamlessly.
                        </Text>
                        <SimpleGrid
                          columns={[1, 2]}
                          mt={10}
                          justifyContent={"space-between"}
                        >
                          <Button
                            color={"white"}
                            boxShadow={
                              " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                            }
                            borderRadius={10}
                            border={"1px solid"}
                            p="6"
                            variant="solid"
                            colorScheme="blue"
                            textAlign={"center"}
                          >
                            Rental ₹ {data.price}
                          </Button>
                          <Button
                            boxShadow={
                              " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
                            }
                            borderRadius={10}
                            border={"1px solid"}
                            p="6"
                            variant="solid"
                            colorScheme="blue"
                          >
                            Deposit ₹ {data.price * 2}
                          </Button>
                        </SimpleGrid>
                      </SimpleGrid>
                    </SimpleGrid>
                  </SimpleGrid>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
        <Box display={["none", "block"]}>
          <RightSideBar url={"hanumat"} />
        </Box>
      </Flex>

      <Footer />
    </>
  );
}
