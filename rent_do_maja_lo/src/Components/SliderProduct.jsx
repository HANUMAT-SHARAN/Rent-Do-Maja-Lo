import React from "react";
import {
  Box,
  Flex,
  Button,
  Image,
  Text,
  Heading,
  colorMode,
  useColorMode,
} from "@chakra-ui/react";
import "../Pages/carousel.css";

export default function SliderProduct(props) {
  const { image, price, title } = props;
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box 
        className="sliderhome"
        borderRadius={5}
        style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
        bg={"gray.700"}
        mt={10}
        h={430}
        w={270}
      >
        <Box ml={"10px"} textAlign="center">
          <Image
            mt={10}
            h={300}
            borderRadius={5}
            p={2}
            w={250}
            src={image}
            alt="d"
          >   
          </Image>
          <Heading color="white" mt={5} mb={5} fontSize={15}>
            {title}
          </Heading>
          <Box>
            <Flex
              color="white"
              borderRadius={20}
           boxShadow={"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Box>
                <Text mr={6} color={colorMode === "light" ? "white" : "white"}>
                  Rent
                </Text>
                <Text>₹ {price}</Text>
              </Box>
              <Box>
                <Button color="white" bg={"red.600"}>
                  See More
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
