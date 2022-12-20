import React from "react";
import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import Footer from "../Components/Footer";
import { Box, Button, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AuthContext } from "../Context/AuthContext";
import "../Pages/carousel.css";
import { InfoIcon } from '@chakra-ui/icons';
import { useNavigate } from "react-router-dom";

export default function CheckoutPage(props) {
  const { total } = React.useContext(AuthContext);
  const [show, setShow] = React.useState(false);
  const [showinfo,setShowinfo]=React.useState(false)
  const navi=useNavigate()
  const [i,seti]=React.useState(false)
  const MakePayment = () => {
    setShowinfo(true)
    seti(true)
    setTimeout(()=>{
        seti(false)
        setShow(true)
       na()
    },5000)
    
  };
  const na=()=>{
    setTimeout(()=>{
        navi("/")
    },3000)
  }
  return (
    <>
      <Navbar />
      <PagesNavbar />
      {!showinfo?<Heading
        borderRadius={20}
        w="auto"
        m="10"
        p="10"
        boxShadow={
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"
        }
      >
        Total Payabe Amount is ₹ {total}
      </Heading>:null}

      {!showinfo?<SimpleGrid
        className="maindiv"
        alignItems="center"
        columns={[1, 2, 3, 4]}
      >
        <Image
          onClick={() => MakePayment()}
          className="pdiv"
          src="data:image/png;base64,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"
        />
        <Image
         onClick={() => MakePayment()}
          className="pdiv"
          src={
            "https://assetscdn1.paytm.com/images/catalog/view/310944/1654517453942.png"
          }
        />
        <Image
         onClick={() => MakePayment()}
          className="pdiv"
          src="https://www.howtogeek.com/wp-content/uploads/2020/11/Google-Pay-hero.png?height=200p&trim=2,2,2,2&crop=16:9"
        />
        <Image
         onClick={() => MakePayment()}
          className="pdiv"
          src={
            "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCAxMzIgNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZT4uc3Qwe2ZpbGw6IzVmMjU5Zn08L3N0eWxlPjxjaXJjbGUgdHJhbnNmb3JtPSJyb3RhdGUoLTc2LjcxNCAxNy44NyAyNC4wMDEpIiBjbGFzcz0ic3QwIiBjeD0iMTcuOSIgY3k9IjI0IiByPSIxNy45Ii8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTkwLjUgMzQuMnYtNi41YzAtMS42LS42LTIuNC0yLjEtMi40LS42IDAtMS4zLjEtMS43LjJWMzVjMCAuMy0uMy42LS42LjZoLTIuM2MtLjMgMC0uNi0uMy0uNi0uNlYyMy45YzAtLjQuMy0uNy42LS44IDEuNS0uNSAzLS44IDQuNi0uOCAzLjYgMCA1LjYgMS45IDUuNiA1LjR2Ny40YzAgLjMtLjMuNi0uNi42SDkyYy0uOSAwLTEuNS0uNy0xLjUtMS41em05LTMuOWwtLjEuOWMwIDEuMi44IDEuOSAyLjEgMS45IDEgMCAxLjktLjMgMi45LS44LjEgMCAuMi0uMS4zLS4xLjIgMCAuMy4xLjQuMi4xLjEuMy40LjMuNC4yLjMuNC43LjQgMSAwIC41LS4zIDEtLjcgMS4yLTEuMS42LTIuNC45LTMuOC45LTEuNiAwLTIuOS0uNC0zLjktMS4yLTEtLjktMS42LTIuMS0xLjYtMy42di0zLjljMC0zLjEgMi01IDUuNC01IDMuMyAwIDUuMiAxLjggNS4yIDV2Mi40YzAgLjMtLjMuNi0uNi42aC02LjN6bS0uMS0yLjJIMTAzLjJ2LTFjMC0xLjItLjctMi0xLjktMnMtMS45LjctMS45IDJ2MXptMjUuNSAyLjJsLS4xLjljMCAxLjIuOCAxLjkgMi4xIDEuOSAxIDAgMS45LS4zIDIuOS0uOC4xIDAgLjItLjEuMy0uMS4yIDAgLjMuMS40LjIuMS4xLjMuNC4zLjQuMi4zLjQuNy40IDEgMCAuNS0uMyAxLS43IDEuMi0xLjEuNi0yLjQuOS0zLjguOS0xLjYgMC0yLjktLjQtMy45LTEuMi0xLS45LTEuNi0yLjEtMS42LTMuNnYtMy45YzAtMy4xIDItNSA1LjQtNSAzLjMgMCA1LjIgMS44IDUuMiA1djIuNGMwIC4zLS4zLjYtLjYuNmgtNi4zem0tLjEtMi4ySDEyOC42di0xYzAtMS4yLS43LTItMS45LTJzLTEuOS43LTEuOSAydjF6TTY2IDM1LjdoMS40Yy4zIDAgLjYtLjMuNi0uNnYtNy40YzAtMy40LTEuOC01LjQtNC44LTUuNC0uOSAwLTEuOS4yLTIuNS40VjE5YzAtLjgtLjctMS41LTEuNS0xLjVoLTEuNGMtLjMgMC0uNi4zLS42LjZ2MTdjMCAuMy4zLjYuNi42aDIuM2MuMyAwIC42LS4zLjYtLjZ2LTkuNGMuNS0uMiAxLjItLjMgMS43LS4zIDEuNSAwIDIuMS43IDIuMSAyLjR2Ni41Yy4xLjcuNyAxLjQgMS41IDEuNHptMTUuMS04LjRWMzFjMCAzLjEtMi4xIDUtNS42IDUtMy40IDAtNS42LTEuOS01LjYtNXYtMy43YzAtMy4xIDIuMS01IDUuNi01IDMuNSAwIDUuNiAxLjkgNS42IDV6bS0zLjUgMGMwLTEuMi0uNy0yLTItMnMtMiAuNy0yIDJWMzFjMCAxLjIuNyAxLjkgMiAxLjlzMi0uNyAyLTEuOXYtMy43em0tMjIuMy0xLjdjMCAzLjItMi40IDUuNC01LjYgNS40LS44IDAtMS41LS4xLTIuMi0uNHY0LjVjMCAuMy0uMy42LS42LjZoLTIuM2MtLjMgMC0uNi0uMy0uNi0uNlYxOS4yYzAtLjQuMy0uNy42LS44IDEuNS0uNSAzLS44IDQuNi0uOCAzLjYgMCA2LjEgMi4yIDYuMSA1LjZ2Mi40ek01MS43IDIzYzAtMS42LTEuMS0yLjQtMi42LTIuNC0uOSAwLTEuNS4zLTEuNS4zdjYuNmMuNi4zLjkuNCAxLjYuNCAxLjUgMCAyLjYtLjkgMi42LTIuNFYyM3ptNjguMiAyLjZjMCAzLjItMi40IDUuNC01LjYgNS40LS44IDAtMS41LS4xLTIuMi0uNHY0LjVjMCAuMy0uMy42LS42LjZoLTIuM2MtLjMgMC0uNi0uMy0uNi0uNlYxOS4yYzAtLjQuMy0uNy42LS44IDEuNS0uNSAzLS44IDQuNi0uOCAzLjYgMCA2LjEgMi4yIDYuMSA1LjZ2Mi40em0tMy42LTIuNmMwLTEuNi0xLjEtMi40LTIuNi0yLjQtLjkgMC0xLjUuMy0xLjUuM3Y2LjZjLjYuMy45LjQgMS42LjQgMS41IDAgMi42LS45IDIuNi0yLjRWMjN6Ii8+PHBhdGggZD0iTTI2IDE5LjNjMC0uNy0uNi0xLjMtMS4zLTEuM2gtMi40bC01LjUtNi4zYy0uNS0uNi0xLjMtLjgtMi4xLS42bC0xLjkuNmMtLjMuMS0uNC41LS4yLjdsNiA1LjdIOS41Yy0uMyAwLS41LjItLjUuNXYxYzAgLjcuNiAxLjMgMS4zIDEuM2gxLjR2NC44YzAgMy42IDEuOSA1LjcgNS4xIDUuNyAxIDAgMS44LS4xIDIuOC0uNXYzLjJjMCAuOS43IDEuNiAxLjYgMS42aDEuNGMuMyAwIC42LS4zLjYtLjZWMjAuOGgyLjNjLjMgMCAuNS0uMi41LS41di0xem0tNi40IDguNmMtLjYuMy0xLjQuNC0yIC40LTEuNiAwLTIuNC0uOC0yLjQtMi42di00LjhoNC40djd6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"
          }
        />
      </SimpleGrid>:null}
     {!showinfo? <Heading
        borderRadius={20}
        w="auto"
        m="10"
        p="10"
        boxShadow={
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;"
        }
      >
        Select Available Payments Apps
      </Heading>:null}

     {i? <Box textAlign="center" py={10} px={6}>
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Please Wait Payment is in Progress!!!
        <Button isloading></Button>
      </Heading>
      
    </Box>:null}

     { show?<Box textAlign="center" py={10} px={6}>
        <CheckCircleIcon boxSize={"50px"} color={"green.500"} />
        <Heading mt={6} mb={2}>
          Hurray! Payment Is Completed Successfully!
        </Heading>
        <Text>Redirecting Back To HomePage<Button p={10} isLoading></Button></Text>
        <Text color={"gray.500"}></Text>
      </Box>:null}
      <Footer />
    </>
  );
}
