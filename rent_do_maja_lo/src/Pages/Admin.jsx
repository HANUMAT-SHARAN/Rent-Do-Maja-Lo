import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Navbar from "../Components/Navbar";
import PagesNavbar from "../Components/PagesNavbar";
import "../Pages/carousel.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Components/Footer"
export default function Admin(props) {
  const [newdata, setNewData] = React.useState({});
  const [data, SetUpdatedData] = React.useState({});
  const [ddata,setDdata]=React.useState({})

  const handlechange = (e) => {
    setNewData({ ...newdata, [e.target.name]: e.target.value });
  };

  const sendata = async () => {
    let data = fetch(`http://localhost:3000/electronics`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newdata),
    });
    const done=toast.success(`Product Added Successfuly`,{theme:"colored",position:"top-center"})
  };

  const handleupdate = (e) => {
    SetUpdatedData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const updatedata = async () => {
    try {
      let datap = await fetch(`http://localhost:3000/electronics/${data.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const done=toast.success(`Product Updated Successfuly`,{theme:"colored",position:"top-center"})
      let res = await datap.json();
      console.log(res);
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handledelete=(e)=>{
    setDdata({...ddata,[e.target.name]:e.target.value})
  }
  console.log(ddata)

  const deleteproduct=async()=>{
    try {
      let datap = await fetch(`http://localhost:3000/electronics/${ddata.id}`, {
        method: "DELETE",
        
      });
      const done=toast.success(`Product Deleted Successfuly`,{theme:"colored",position:"top-center"})
      let res = await datap.json();
      console.log(res);
    } catch (error) {
      console.log("error ", error);
    }
  }
  return (
    <>
      <Navbar />
      <PagesNavbar />
      <SimpleGrid columns={[1, 2]}>
        <Box className="admindiv">
          <Heading className="p">Add New Product</Heading>
          <Text className="p">Enter Product Title</Text>
          <Input
            className="p"
            name="title"
            onChange={(e) => handlechange(e)}
            type="text"
            placeholder="Title"
          />
          <Text className="p">Enter Product Image Url</Text>
          <Input
            className="p"
            name="img"
            onChange={(e) => handlechange(e)}
            type="text"
            placeholder="Image Url"
          />
          <Text className="p">Enter Product Price</Text>
          <Input
            name="price"
            className="p"
            onChange={(e) => handlechange(e)}
            type="number"
            placeholder="Price"
          />
          <Text className="p">Select Category of The Product</Text>
          <Select
            className="p"
            name="category"
            onChange={(e) => handlechange(e)}
            placeholder="Select option"
          >
            <option value="wfm">Work From Home</option>
            <option value="livingroom">Living Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="bedroom">Bedroom</option>
            <option value="treadmill">Treadmill</option>
            <option value="crosstrainer">Cross Trainer</option>
            <option value="cycle">Cycle</option>
            <option value="massager">Massager</option>
            <option value="tablets">Tablets</option>
            <option value="smartdevices">Smart Devices</option>
            <option value="laptop">Laptop</option>
            <option value="smartphone">Smart Phones</option>
          </Select>
          <Button
            mt={5}
            color="white"
            pl={10}
            pr={10}
            bg="red.500"
            onClick={() => sendata()}
          >
            Add Data
          </Button>
        </Box>
        <Box className="admindiv">
          <Heading className="p">Update Product</Heading>
          <Text className="p">Enter Product ID</Text>
          <Input
            className="p"
            name="id"
            onChange={(e) => handleupdate(e)}
            type="text"
            placeholder="ID"
          />
          <Text className="p">Enter Product Title</Text>
          <Input
            className="p"
            name="title"
            onChange={(e) => handleupdate(e)}
            type="text"
            placeholder="Title"
          />
          <Text className="p">Enter Product Image Url</Text>
          <Input
            className="p"
            name="img"
            onChange={(e) => handleupdate(e)}
            type="text"
            placeholder="Image Url"
          />
          <Text className="p">Enter Product Price</Text>
          <Input
            className="p"
            name="price"
            onChange={(e) => handleupdate(e)}
            type="number"
            placeholder="Price"
          />
          <Text className="p">Select Category of The Product</Text>
          <Select
            className="p"
            name="category"
            onChange={(e) => handleupdate(e)}
            placeholder="Select option"
          >
            <option value="wfm">Work From Home</option>
            <option value="livingroom">Living Room</option>
            <option value="kitchen">Kitchen</option>
            <option value="bedroom">Bedroom</option>
            <option value="treadmill">Treadmill</option>
            <option value="crosstrainer">Cross Trainer</option>
            <option value="cycle">Cycle</option>
            <option value="massager">Massager</option>
            <option value="tablets">Tablets</option>
            <option value="smartdevices">Smart Devices</option>
            <option value="laptop">Laptop</option>
            <option value="smartphone">Smart Phones</option>
          </Select>
          <Button
            mt={5}
            color="white"
            pl={10}
            pr={10}
            bg="red.500"
            onClick={() => updatedata()}
          >
            Update Data
          </Button>
        </Box>
        <Box className="admindiv">
          <Heading className="p">Delete Product</Heading>
          <Text className="p">Enter Product ID</Text>
          <Input
            className="p"
            name="id"
            onChange={(e) => handledelete(e)}
            type="text"
            placeholder="Enter Product ID"
          />

          <Button
            mt={5}
            color="white"
            pl={10}
            pr={10}
            bg="red.500"
            onClick={() => deleteproduct()}
          >
            DELETE 
          </Button>
        </Box>
      </SimpleGrid>
      <Footer />
      <ToastContainer />
    </>
  );
}
