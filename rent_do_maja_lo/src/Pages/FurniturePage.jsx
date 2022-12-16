import React from 'react'
import SimpleSidebar from '../Components/LeftSidebar'
import Navbar from '../Components/Navbar'
import PagesNavbar from '../Components/PagesNavbar'
import Footer from "../Components/Footer"
import Loader from '../Components/Loader'
import { Flex } from '@chakra-ui/react'


export default function FurniturePage(props) {
    

    return (
        <>
        <Navbar />
        <PagesNavbar />
       
      
      
       <SimpleSidebar   />
    
       {/* {load?<Loader />:<SimpleGrid
       position="relative"
        columns={[1, 2, 3]}
        spacing={[0, 9, 10]}
        ml={[0, 0, 350]}
        textAlign="right"
      >
        {data&&data.map((el) => (
          <ProductCard
            img={el.img}
            price={el.price}
            title={el.title}
            dimg={el.deliveryicon}
          />
        ))}
      </SimpleGrid>} */}
    
       
       <Footer />
       
       
      
        </>
    )
}
