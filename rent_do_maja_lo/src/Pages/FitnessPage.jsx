import React from "react";
import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import Footer from "../Components/Footer";
import FitnessSidebar from "../Components/FitnessSidebar";
import { Flex } from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
import ProductsMap from "../Components/ProductsMap";
export default function FitnessPage(props) {
  const { fitnessData } = React.useContext(AuthContext);
  return (
    <>
      <Navbar />
      <PagesNavbar />
      <Flex display={["block","block","flex","flex"]}>
        <FitnessSidebar />
        <ProductsMap data={fitnessData}/>
      </Flex>
      <Footer />
    </>
  );
}
