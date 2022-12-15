import React from 'react'
import SimpleSidebar from '../Components/LeftSidebar'
import Navbar from '../Components/Navbar'
import PagesNavbar from '../Components/PagesNavbar'
import Footer from "../Components/Footer"


export default function FurniturePage(props) {
    

    return (
        <>
        <Navbar />
        <PagesNavbar />
       <SimpleSidebar  title1={"bed"} />
       <Footer />
       
       
        </>
    )
}
