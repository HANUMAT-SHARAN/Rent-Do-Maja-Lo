import { SimpleGrid, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import HomePageCarousel from "../Components/HomePageCarousel";
import Navbar from "../Components/Navbar";
import Carousel from "react-multi-carousel";
import "./carousel.css";
import SliderProduct from "../Components/SliderProduct";
import HomeSlider from "../JsonData/HomePageSlider.json";
import {useNavigate} from "react-router-dom"
import Footer from "../Components/Footer";

import "react-multi-carousel/lib/styles.css";

export default function Home(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
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
      path:"/pakages"
    },
    {
      img: "https://cdn0.iconfinder.com/data/icons/interior-design-flat/340/bedroom_room_interior_home_bed_furniture_lamp_house_pillows-256.png",
      title: "Furniture",
      path:"/furniture"
    },
    {
      img: "https://cdn0.iconfinder.com/data/icons/budget-and-expense-1/512/laundry-washing-machine-clothes-256.png",
      title: "Appliances",
      path:"/appliances"
    },
    {
      img: "https://cdn3.iconfinder.com/data/icons/smart-phone-flat/58/Smart_Phones_-_Flat_-_019_-_Notifications-512.png",
      title: "Electronics",
      path:"/electronics"
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/recreation-and-hobbies-2/100/28-256.png",
      title: "Fitness",
      path:"/fitness"
    },
    {
      img: "https://cdn1.iconfinder.com/data/icons/back-to-school-illustrathin/128/study-desk-learning-table-256.png",
      title: "WFM ",
      path:"work-from-home"
    },
  ];

 const nav=useNavigate()
 
  return (
    <>
      <Navbar />
      <HomePageCarousel mt={20} />
      <SimpleGrid
        m="auto"
        mt={10}
        alignItems={"center"}
     
        columns={{ base: 2, md: 3, lg: 5, xl: 6,  }}
       gap="20px"
      >
        {boxarr.map((el) => (
          <Box
             onClick={()=>nav(el.path)}
            className="category"
            borderRadius={15}
            p={"20px 40px 20px 40px"}
           
            style={{
              textAlign: "center",
              alignItems: "center",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            {<Image w={"50px"} src={el.img} alt={el.title}></Image>}{" "}
            <Text mt={5}>{el.title}</Text>{" "}
          </Box>
        ))}
      </SimpleGrid>
      <Carousel dots={true} autoPlay={true} responsive={responsive}>
        {HomeSlider.map((el) => (
          <SliderProduct image={el.img} title={el.title} price={el.price} />
        ))}
      </Carousel>
      <Footer />
     
    </>
  );
}
