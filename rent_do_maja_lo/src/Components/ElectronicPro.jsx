import React from "react";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Container,
  Heading,
  Button,
  Text,
  Image,
  Divider,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


export default function ElectronicPro(props) {
  const { title, price, img, dimg,id } = props;
  const [notbutton, showbutton] = React.useState(false);

  const navto=useNavigate()
  return (
    <>
      <Box
      onClick={()=>navto(`/electronics/${id}`)}
      style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",}}
      borderRadius={15}
        onMouseEnter={() => showbutton(true)}
        onMouseLeave={() => showbutton(false)}
        w="250px"
        m="auto"
        p="10px"
      >
        <Image   borderRadius={15} m={"auto"} w={250} src={img} alt="game"></Image>
        <Flex
 
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
           
            <Text noOfLines={1} fontSize={"14px"}>
              {title}
            </Text>
          </Box>{" "}
          <Button bg="red.100" postion="absolute">
         <Image w={5} src="https://cdn1.iconfinder.com/data/icons/modern-universal/32/icon-19-64.png"></Image>
          </Button>
        </Flex>
        <Divider />
        <Divider color="black" />

        <Flex p={2} justifyContent={"space-between"}>
          <Text>₹ {price}/month</Text>
          <Image src={dimg}></Image>
        </Flex>
        <Divider />
        <Divider />
        <Box>
          <Button
            positon="absolute"
            transition={"0.8s"}
            borderRadius={20}
            p={"20px 30px 20px 30px"}
            display={!notbutton ? "none" : null}
            w="230px"
            bg="red"
          >
            Quick View
          </Button>
        </Box>
      </Box>
    </>
  );
}
