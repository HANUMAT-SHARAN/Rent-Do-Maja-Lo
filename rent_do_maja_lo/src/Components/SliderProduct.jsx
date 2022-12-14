import React from 'react'
import { Box,Flex,Button,Image,Text,Heading,colorMode,useColorMode } from '@chakra-ui/react'
import "../Pages/carousel.css"

export default function SliderProduct(props) {
    const {image,price,title}=props
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <>
           <Box style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}   bg={"gray.700"} mt={10} h={430} w={250} >
            <Box  ml={"10px"} textAlign="center"  >
            <Image mt={10} h={300} borderRadius={15} p={2} w={230} src={image} alt="d"></Image>
          <Heading  mt={5} mb={5} fontSize={15}>{title}</Heading>
          <Box >
            <Flex w={200}  justifyContent={"space-between"}>
              <Box >
                <Text color={colorMode==="light"?"black":"white"}>Rent</Text>
                <Text>$ {price}</Text>
              </Box>
              <Button color="white" bg={"red.600"} border={"1px solid red"}>See More</Button>
            </Flex>
          </Box>
            </Box>
         
        </Box>  
        </>
    )
}
