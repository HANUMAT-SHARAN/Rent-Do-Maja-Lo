import React from 'react'
import Navbar from '../Components/Navbar'
import PagesNavbar from '../Components/PagesNavbar'
import { Flex } from '@chakra-ui/react'
import ElectronicSidebar from '../Components/ElectronicsSidebar'
import Footer from "../Components/Footer"
import ProductsMap from '../Components/ProductsMap'
import Pass from '../Components/Pass'
import { AuthContext } from "../Context/AuthContext";

export default function ElectronicsPage(props) {
    const { elecData } = React.useContext(AuthContext);
    console.log(elecData)

    return (
        <>
            <Navbar />
            <PagesNavbar />
            <Flex display={["block","block","flex","flex"]}>
                <ElectronicSidebar />
                <ProductsMap data={elecData}/>
                
            </Flex>
            {/* Parent Flex */}
            <Footer />
        </>
    )
}
