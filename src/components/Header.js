import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
/* import { Badge } from '@mui/material'*/
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'; 
import { AppState } from '../context/AppContext'

export const Header = () => {
  let navigate = useNavigate();

  const { cart } = AppState()

  return (
    <Box
      bg={"blue.500"}
      color={"#ffffff"}
      height={"60px"}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"0 30px"}
      fontFamily={"sans-serif"}
    >
      <Link
        to="/"
        style={{
          fontSize: "20px",
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        TeeRex Store
      </Link>
      <Flex align="center" gap={"15px"}>
        <Box display={{ base: "none", md: "block" }}>
          <Link to="/">Products</Link>
        </Box>
        <Box onClick={() => navigate("/cart")} style={{ position: 'relative' }} cursor={"pointer"}>
          <ShoppingCartOutlinedIcon sx={{ fontSize : "24px" }}/>
          <Box
          border={'full'}
          position={'absolute'}
          top={'-5px'}
          right={'-5px'}
          bg={'red.500'}
          borderRadius={'50%'}
          fontSize={'10px'}
          height={'15px'}
          width={'15px'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
        >
          {cart.reduce((acc, item) => acc + item.cartQuantity, 0)}
        </Box>
        </Box>
      </Flex>
    </Box>
  );
};
