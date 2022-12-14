import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import HomePageCarousel from "../Components/HomePageCarousel";
import Navbar from "../Components/Navbar";
import Carousel from "react-multi-carousel";
import "./carousel.css";
import SliderProduct from "../Components/SliderProduct";
import HomeSlider from "../JsonData/HomePageSlider.json";

import "react-multi-carousel/lib/styles.css";

export default function Home(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const boxarr = [
    {
      img: "https://cdn0.iconfinder.com/data/icons/warehouse-3/50/11-256.png",
      title: "Pakages",
    },
    {
      img: "https://cdn0.iconfinder.com/data/icons/interior-design-flat/340/bedroom_room_interior_home_bed_furniture_lamp_house_pillows-256.png",
      title: "Furniture",
    },
    {
      img: "https://cdn0.iconfinder.com/data/icons/budget-and-expense-1/512/laundry-washing-machine-clothes-256.png",
      title: "Appliances",
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/smart-phone-flat/58/Smart_Phones_-_Flat_-_019_-_Notifications-512.png",
      title: "Electronics",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/recreation-and-hobbies-2/100/28-256.png",
      title: "Fitness",
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/back-to-school-illustrathin/128/study-desk-learning-table-256.png",
      title: "WFM Essentials",
    },
  ];
 console.log(HomeSlider)
 
  return (
    <>
      <Navbar />
      <HomePageCarousel />
      <SimpleGrid
        m="auto"
        mt={10}
        alignItems={"center"}
        w={1200}
        columns={{ base: 2, md: 4, lg: 5, xl: 6, "2xl": 6 }}
        gap="1px"
      >
        {boxarr.map((el) => (
          <Box
            className="category"
            borderRadius={15}
            pl={30}
            pr={30}
            style={{
              textAlign: "center",
              alignItems: "center",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            {<Image w={"60px"} src={el.img} alt={el.title}></Image>}{" "}
            <Text mt={5}>{el.title}</Text>{" "}
          </Box>
        ))}
      </SimpleGrid>
      <Carousel responsive={responsive}>
        {HomeSlider.map((el) => (
          <SliderProduct image={el.img} title={el.title} price={el.price} />
        ))}
      </Carousel>
     
    </>
  );
}
