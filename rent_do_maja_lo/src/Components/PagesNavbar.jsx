import React from "react";
import { Container, Box, Flex, Grid, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function PagesNavbar(props) {
  const arr = [
      { title: "Home", path: "/" },
      
    { title: "Pakages", path: "/pakages" },
    { title: "Furniture", path: "/furniture" },
    { title: "Appliances", path: "/appliances" },
    { title: "Fitness", path: "/fitness" },
    { title: "Electronics", path: "/electronics" },
  ];

  const activeStyle = {
    color: "blue",
  };
  const divstyle={boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",padding:"  10px 20px 10px 20px",borderRadius:"10px"}

  return (
    <>
      <Flex p={5} bg={"gray.200"} justifyContent={"space-around"}>
        {arr.map((el) => (
          <NavLink to={el.path} style={({ isActive }) => (isActive ? activeStyle : null)}>
            <Box >
              <Text>{el.title}</Text>
            </Box>
          </NavLink>
        ))}
      </Flex>
    </>
  );
}
