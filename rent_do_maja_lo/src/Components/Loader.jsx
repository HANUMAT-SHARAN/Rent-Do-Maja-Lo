import React from "react";
import { Skeleton, Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
export default function Loader(props) {
  return (
    <>
      <Box padding="15"  boxShadow="lg" bg="white">
        <Skeleton />
        <SkeletonCircle size="50" />
        <SkeletonText mt="4" noOfLines={4} spacing="5" skeletonHeight="5" />
      </Box>
      
    </>
  );
}
