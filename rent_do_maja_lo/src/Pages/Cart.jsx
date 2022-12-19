import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import Footer from "../Components/Footer";
import CartDiv from "../Components/CartDiv";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import "../Pages/carousel.css";
export default function Cart(props) {
  const [data, setData] = React.useState([]);

  const [totalvalue, SetTotalValue] = React.useState();
  React.useEffect(() => {
    getcart();
  }, []);
  
  let getcart = async () => {
    try {
      let cartdata = await fetch(`http://localhost:3000/cartserver`);
      let response = await cartdata.json();
      console.log(response);
      setData(response);
    } catch (error) {
      console.log("error ", error);
    }
  };

  let arr = [];
  for (let i = 0; i <= data.length - 1; i++) {
    arr.push(data[i].price);
  }
  const sum = arr.reduce((ac, el) => el + ac, 0);

  //Remove Api
  const removedata = async (id) => {
    try {
      let cartdata = await fetch(`http://localhost:3000/cartserver/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log("error ", error);
    }
    const notifysucess = toast.error("Item Removed Succesfully", {
      theme: "colored",
      position: "top-center",
    });
    getcart();
  };

  return (
    <>
      <Navbar />
      <PagesNavbar />
      <SimpleGrid columns={[1, 2, 3]}>
        <Box className="cart">
          <Flex className="cartdiv">
            {" "}
            <Image
              src={
                "https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg"
              }
            />
            <Text ml={3}>Order Summary</Text>
          </Flex>
          <Flex className="cartdiv">Payable Now{"-->"}</Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            <Text>Refundable Deposit </Text> <Text>{`₹ ${sum * 2}`}</Text>
          </Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            {" "}
            <Text>Installation Charges </Text>
            <Text> ₹ {sum / 2}</Text>
          </Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            {" "}
            <Text>Delivery Charges</Text> <Text> ₹ {199}</Text>
          </Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            <Text> Total Payout</Text>{" "}
            <Text>{`₹ ${sum * 2 + sum / 2 + 199}`}</Text>{" "}
          </Flex>
        </Box>
        <Box className="cart">
          <Flex className="cartdiv">
            {" "}
            <Image
              src={
                "https://www.rentomojo.com/public/images/radical-cart/icons/summary__icon.svg"
              }
            />
            <Text ml={3}>Final Order Summary</Text>
          </Flex>
          <Flex className="cartdiv">Monthly Payable{"-->"}</Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            <Text>Products Rent </Text> <Text>{`₹ ${sum}`}</Text>
          </Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            {" "}
            <Text>GST Charges </Text>
            <Text> ₹ {Math.floor((18 / 100) * sum)}</Text>
          </Flex>
          <Flex className="cartdiv" justifyContent={"space-between"}>
            {" "}
            <Text>Total Monthly Rent</Text>{" "}
            <Text> ₹ {sum + Math.floor((18 / 100) * sum)}</Text>
          </Flex>
          <Flex className="cartdiv">
            {" "}
            <Image
              src={
                "https://www.rentomojo.com/public/images/radical-cart/icons/calendar__icon.svg"
              }
            />
            <Text ml={3}>Not to be paid now. Pay post usage every month.</Text>
          </Flex>
          <Button color={"white"} bg={"#dc4024 "} p="7" w="auto">Proceed To Checkout</Button>
        </Box>
        <Box>
          {data &&
            data.map((el) => (
              <CartDiv
                removedata={removedata}
                id={el.id}
                img={el.img}
                price={el.price}
                title={el.title}
              />
            ))}
        </Box>
      </SimpleGrid>
      <ToastContainer />
      <Footer />
    </>
  );
}
