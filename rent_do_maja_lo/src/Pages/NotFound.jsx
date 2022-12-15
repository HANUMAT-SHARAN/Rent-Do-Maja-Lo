import React from "react";
import { Heading, Box, Text, Image, Button } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";

export default function NotFound(props) {
    const [load,setLoad]=React.useState(false)
    const nav=useNavigate()

    const redirect=()=>{
        setLoad(true)
        setTimeout(()=>{nav("/")})
    }
  return (
    <>
      <Navbar />
      <Heading mt={5}>Whoops, looks like we lost one!</Heading>
      <Text mt={5}>
        We cant find the page you were looking for.
        <br />
        You may want to head back to the homepage.
      </Text>

      <Image
        w={"500px "}
        m={"auto"}
        mt={"30px"}
        src={"https://www.rentomojo.com/public/images/error/404.png"}
      ></Image>

      <Button mt={5}
      onClick={redirect}
        isLoading={load}
        loadingText="Redirecting"
        bg="red.500"
        variant="outline"
      >
        Go To Homepage
      </Button>
    </>
  );
}
