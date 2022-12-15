import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import RightSideBar from "../Components/RightSideBar";
import React from "react";
import ReactAppStoreBadge from "react-app-store-badge";
import Footer from "../Components/Footer"
export default function SingleProductPage(props) {
  return (
    <>
      <Navbar />
      <PagesNavbar />
      <RightSideBar />
      <ReactAppStoreBadge
        textHeading="Available on the"
        textStoreName="App Store"
        icon={<i className="icon-my-icon" />}
        url="www.myappstoreplaceholder.com"
      />
      <Footer />
    </>
  );
}
