import React from "react";
import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import Footer from "../Components/Footer";
import FitnessSidebar from "../Components/FitnessSidebar";
import { Flex } from "@chakra-ui/react";

export default function FitnessPage(props) {
  return (
    <>
      <Navbar />
      <PagesNavbar />
      <Flex>
        <FitnessSidebar />
      </Flex>
      <Footer />
    </>
  );
}
