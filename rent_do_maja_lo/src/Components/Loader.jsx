import React from "react";
import { Skeleton, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function Loader(props) {
  return (
    <>
      <Box p={40} gap={20}  boxShadow="lg" bg="white">
     
        <SkeletonText  mt="20" noOfLines={7} spacing="5" skeletonHeight="6" />
      </Box>
      
    </>
  );
}
