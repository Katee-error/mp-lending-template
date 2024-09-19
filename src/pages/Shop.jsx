import React, { useState } from "react";

import {
  Box,
  Flex,
  Select,
  Stack,
  FormControl,
  Container,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiFilter, FiSearch } from "react-icons/fi";
import items from "../data/items";
import ProductList from "../UI/ProductList";

const Catalog = () => {
  const [productsData, setProductsData] = useState(items);
  // фильтрация
  const handleFilter = (e) => {
    const filterValue = e.target.value;
    if (filterValue === "Рубашки") {
      const filteredProducts = items.filter(
        (item) => item.category === "Рубашки"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "Футболки") {
      const filteredProducts = items.filter(
        (item) => item.category === "Футболки"
      );

      setProductsData(filteredProducts);
    }
    if (filterValue === "Штанишки") {
      const filteredProducts = items.filter(
        (item) => item.category === "Штанишки"
      );

      setProductsData(filteredProducts);
    }
  }; // фильтрация по категориям

  const handleSearch = (e) => {
    const searchTeam = e.target.value;

    const searchedProducts = items.filter((item) =>
      item.name.toLowerCase().includes(searchTeam.toLowerCase())
    );

    setProductsData(searchedProducts);
  }; // фильтрация по работе search input

  return (
    <>
      <Box py={"40px"}>
        <Container maxW={"container.lg"}>
          <Flex
            justifyContent={"space-between"}
            gap={{ base: "15px", md: "40px" }}
            textAlign={"center"}
            flexDirection={{ base: "column", md: "row" }}
          >
            <FormControl>
              <Select placeholder="Filter By Catrgory" onChange={handleFilter}>
                <option value="Рубашки">Рубашки</option>
                <option value="Футболки">Футболки</option>
                <option value="Штанишки">Штанишки</option>
                
              </Select>
            </FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FiSearch />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search...."
                onChange={handleSearch}
              />
            </InputGroup>
          </Flex>
        </Container>
      </Box>

      <Box py={"60px"}>
        <Container maxW={"container.xl"}>
          <SimpleGrid minChildWidth="300px">
            {productsData.length === 0 ? (
              <Heading>No products are found! </Heading>
            ) : (
              <ProductList data={productsData} />
            )}
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};

export default Catalog;
