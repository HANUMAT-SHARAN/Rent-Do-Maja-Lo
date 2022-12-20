import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import Footer from "../Components/Footer";
import CartDiv from "../Components/CartDiv";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import "../Pages/carousel.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Cart(props) {
  const [data, setData] = React.useState([]);
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    getcart();
  }, []);

  const { totalsum } = React.useContext(AuthContext);

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
  let sum = 0;
  let arr = [];
  const sendidcount = (id, count) => {
    setCount(count);
  };
  const navito = useNavigate();

  for (let i = 0; i <= data.length - 1; i++) {
    arr.push(data[i].price);
  }
  sum = arr.reduce((ac, el) => el + ac, 0);
  console.log(sum);
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
  const emptycart = async () => {
    try {
      let cartdata = await fetch(`http://localhost:3000/cartserver`);
      let response = await cartdata.json();
      console.log(response);
      response = null;
      setData(response);
    } catch (error) {
      console.log("error ", error);
    }
    getcart();
  };

  const sendsum = (t) => {
    totalsum(t);
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
            <Text>{`₹ ${sum * count * 2 + sum / 2 + 199}`}</Text>{" "}
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
            <Text> ₹ {sum * count + Math.floor((18 / 100) * sum)}</Text>
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
          <Button
            onClick={() => [navito("/checkout"), sendsum(sum), emptycart()]}
            color={"white"}
            bg={"#dc4024 "}
            p="7"
            w="auto"
          >
            Proceed To Checkout
          </Button>
        </Box>
        {data.length !== 0 ? (
          <Box>
            {data &&
              data.map((el) => (
                <CartDiv
                  removedata={removedata}
                  id={el.id}
                  img={el.img}
                  price={el.price}
                  title={el.title}
                  sendidcount={sendidcount}
                />
              ))}
          </Box>
        ) : (
          <Heading
            p={10}
            alignItems={"center"}
            boxShadow={
              "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"
            }
            borderRadius={20}
          >
            Bhai Kya kr Raha Hai Tu ??? <br /> Rent De <br /> Maja Le Yaar!!!{" "}
          </Heading>
        )}
      </SimpleGrid>
      <ToastContainer />
      <Footer />
    </>
  );
}
