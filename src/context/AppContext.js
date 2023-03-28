import { createContext, useContext, useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const toast = useToast();
  const BASEURL = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;

  useEffect(() => {
    axios
      .get(`${BASEURL}`)
      .then((response) => {
        setProducts(response.data);
        setSearchResult(response.data);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: error.message,
          isClosable: true,
        });
      });
  }, []);

  useEffect(() => {
    if (searchString.length > 0) {
      const searchFilteredData = products.filter((product) => {
        return (
          product.name.toLowerCase().includes(searchString.toLowerCase()) ||
          product.color.toLowerCase().includes(searchString.toLowerCase()) ||
          product.type.toLowerCase().includes(searchString.toLowerCase())
        );
      });
      setSearchResult(searchFilteredData);
    } else {
      setSearchResult(products);
    }
  }, [searchString]);

  const addToCart = () => {};

  const incrementCart = () => {};

  const decrementCart = () => {};

  const removeFromCart = () => {};

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        searchString,
        setSearchString,
        searchResult,
        setSearchResult,
        addToCart,
        incrementCart,
        decrementCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppState = () => useContext(AppContext);
