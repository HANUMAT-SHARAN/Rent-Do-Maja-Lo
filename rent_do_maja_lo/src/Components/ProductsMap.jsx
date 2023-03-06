import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ElectronicPro from "./ElectronicPro";
import Loader from "./Loader";

const ProductsMap = ({ data }) => {
  const [load, setLoad] = React.useState(false);
  React.useEffect(() => {
    setLoad(true);
    setLoad(false);
  }, []);
  return (
    <div>
      <SimpleGrid
        ml={[0, 10, 10, 20]}
        mt={10}
        columns={[1, 2, 2, 2, 3]}
        spacing={[10]}
        textAlign="right"
      >
        {data &&
          data.map((el) =>
            load ? (
              <Loader />
            ) : (
              <ElectronicPro
                img={el.img}
                id={el.id}
                price={el.price}
                title={el.title}
                dimg={el.deliveryicon}
              />
            )
          )}
      </SimpleGrid>
    </div>
  );
};

export default ProductsMap;
