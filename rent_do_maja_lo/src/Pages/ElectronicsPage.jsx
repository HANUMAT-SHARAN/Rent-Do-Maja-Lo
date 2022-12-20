import React from 'react'
import Navbar from '../Components/Navbar'
import PagesNavbar from '../Components/PagesNavbar'
import { Flex } from '@chakra-ui/react'
import ElectronicSidebar from '../Components/ElectronicsSidebar'
import Footer from "../Components/Footer"
export default function ElectronicsPage(props) {
    

    return (
        <>
            <Navbar />
            <PagesNavbar />
            <Flex>
                <ElectronicSidebar />

            </Flex>
            {/* Parent Flex */}
            <Footer />
        </>
    )
}
