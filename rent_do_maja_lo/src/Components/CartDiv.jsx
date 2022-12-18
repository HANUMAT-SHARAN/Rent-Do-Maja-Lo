import { Flex, Image, Button, Text, Box, Select } from "@chakra-ui/react";
import React from "react";

import { ToastContainer, toast } from "react-toastify";
function CartDiv({ title, img, price, removedata, id }) {
  const [mainid, setmainid] = React.useState(0);
  const [count, setCount] = React.useState(1);
  const [selectvalue, setSelectValue] = React.useState(12);
  const [sid, setSelectid] = React.useState();
  const sendnew = (id) => {
    setmainid(id);
  };
  const selectid = (id) => {
    const sucess = toast.info("Tenure is Successfuly Updated", {
      theme: "colored",
      position: "top-center",
    });
    setSelectid(id);
  };
  const [load, startload] = React.useState(false);

  const start = () => {
    const sucess = toast.success("Quantity is Successfuly Updated", {
      theme: "colored",
      position: "top-center",
    });
    startload(true);
    setTimeout(() => {
      startload(false);
    }, 500);
  };

  return (
    <Box className="cards" p={10}>
      <Flex className="productcard"align={"center"} justifyContent={"space-between"}>
        <Text>{title}</Text>
        <Button onClick={() => removedata(id)}><Image w={7} src={"https://cdn4.iconfinder.com/data/icons/computer-and-web-2/500/Delete-64.png"} /> </Button>
      </Flex>
      <Flex className="productcard" align={"center"} justifyContent={"space-between"}>
        <Image borderRadius={10} w={20} src={img} />{" "}
        <Flex justifyContent={"space-between"}>
          <Text fontSize={14}> Installation ₹ {price / 2}</Text>
          <Text fontSize={14}>  Rent ₹ {mainid == id ? price * count : price}/month</Text>
          <Text fontSize={14}>
            {" "}
            Deposit ₹{" "}
            {sid == id && selectvalue == 12 ? price * 2 - price / 2 : price * 2}
          </Text>
        </Flex>
      </Flex>
      <Flex className="productcard" align={"center"} justifyContent={"space-between"}>
        <Flex>
          <Button bg="blue.100"
            disabled={count == 5 ? true : false}
            onClick={() => [sendnew(id), setCount(count + 1), , start()]}
          >
            +
          </Button>
          <Button disabled isLoading={load}>
            {count}
          </Button>
          <Button bg="blue.100"
            disabled={count == 1 ? true : false}
            onClick={() => [sendnew(id), setCount(count - 1), start()]}
          >
            {" "}
            -
          </Button>
        </Flex>
        <Select
          onChange={(e) => [setSelectValue(e.target.value), selectid(id)]}
          defaultValue={12}
        >
          <option value={12}>12 Months</option>
          <option value={6}>6 Months</option>
        </Select>
      </Flex>
      <Flex bg={"blue.300"} className="productcard" align={"center"} w={"auto"} justifyContent={"space-around"}>
        <Image
          alt="fdf"
          src={
            "https://www.rentomojo.com/public/images/fast-delivery/fast-delivery.svg"
          }
        />
        <Text>
          Delivery By {new Date().getDate() + 4}-{new Date().getMonth() + 1}-
          {new Date().getFullYear()}
        </Text>
      </Flex>
      <ToastContainer />
    </Box>
  );
}
export default CartDiv;
