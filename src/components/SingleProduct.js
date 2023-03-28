import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { AppState } from "../context/AppContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const SingleProduct = ({ data }) => {
  const { cart, addToCart, incrementCart, decrementCart } = AppState();

  return (
    <Box display="flex" flexDirection={"column"} gap={2} boxShadow="base">
      <Image src={data.imageURL} height={200} objectFit="cover"></Image>
      <Text fontSize={"xl"}>{data.name}</Text>
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={2}
      >
        <Text fontSize={{ base: "17px", md: "20px" }}>{data.price} ₹</Text>
        {cart.find((item) => item.id === data.id) ? (
          <ButtonGroup>
            <IconButton icon={<AddIcon />} onClick={() => incrementCart(data)} />
            <Button>
              {cart.find((item) => item.id === data.id).cartQuantity}
            </Button>
            <IconButton icon={<RemoveIcon />} onClick={() => decrementCart(data)} />
          </ButtonGroup>
        ) : data.quantity > 0 ? (
          <Button colorScheme={"blue"} onClick={() => addToCart(data)}>
            Add To Cart
          </Button>
        ) : (
          <Button
            colorScheme={"red"}
            onClick={() => addToCart(data)}
            disabled={true}
          >
            Out of Stock
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default SingleProduct;
