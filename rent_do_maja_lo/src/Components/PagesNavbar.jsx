import React from "react";
import { Container, Box, Flex, Grid, Text, SimpleGrid } from "@chakra-ui/react";
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
  const divstyle = {
    boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
    padding: "  10px 20px 10px 20px",
    borderRadius: "10px",
  };

  return (
    <>
      <SimpleGrid
        columns={[2,3, 4, 5, 6]}
        gap={5}
        mb={10}
        p={5}
        bg={"gray.200"}
        justifyContent={"space-around"}
      >
        {arr.map((el) => (
          <NavLink
            to={el.path}
            style={({ isActive }) => (isActive ? activeStyle : null)}
          >
            <Box
              color="black"
              _hover={{ transition: "0.8s", padding: "20px" }}
              style={divstyle}
            >
              <Text>{el.title}</Text>
            </Box>
          </NavLink>
        ))}
      </SimpleGrid>
    </>
  );
}
