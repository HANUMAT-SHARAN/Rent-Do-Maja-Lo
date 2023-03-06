import React from "react";
import SimpleSidebar from "../Components/LeftSidebar";
import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import Footer from "../Components/Footer";
import Loader from "../Components/Loader";
import { Flex } from "@chakra-ui/react";
import ProductsMap from "../Components/ProductsMap";
import { AuthContext } from "../Context/AuthContext";
export default function FurniturePage(props) {
  const { furnitureData } = React.useContext(AuthContext);

  return (
    <>
      <Navbar />
      <PagesNavbar />

     <Flex display={["block","block","flex","flex"]}>
     <SimpleSidebar />
     <ProductsMap data={furnitureData}/>
     </Flex>

     

      <Footer />
    </>
  );
}
