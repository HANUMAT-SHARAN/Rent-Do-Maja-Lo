import React from 'react'
import SimpleSidebar from '../Components/LeftSidebar'
import Navbar from '../Components/Navbar'
import PagesNavbar from '../Components/PagesNavbar'


export default function FurniturePage(props) {
    

    return (
        <>
        <Navbar />
        <PagesNavbar />
       <SimpleSidebar title1={"bed"} />
       
        </>
    )
}
