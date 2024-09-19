import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Center,
  SimpleGrid,
  Heading,
  Flex,
  Link,
} from "@chakra-ui/react";
import AboutUs from "../components/homePage/AboutUs.jsx";
import HeroSlider from "../components/homePage/HeroSlider.jsx";
import HeroSliderReviews from "../components/homePage/HeroSliderReviews.jsx";
import ProductList from "../UI/ProductList.jsx";
import items from "../data/items.js";

import { NavLink } from "react-router-dom";

const HomePage = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    const filteredTrendingProducts = items.filter(
      (item) => item.trending === "trending"
    );
    setTrendingProducts(filteredTrendingProducts);
  });

  return (
    <Box>
      <HeroSlider />
      <AboutUs />
      <Box as="section" py={"60px"}>
        <Container maxW={"container.xl"}>
          <Center>
            <Heading
              pb={"60px"}
              fontSize={{ base: "40px", md: "50px" }}
              fontWeight={"300"}
              maxW={"500px"}
            >
              Бестселлеры
            </Heading>
          </Center>
          <Box display={{base:'flex', md: 'block'}} justifyContent={'center'} alignItems={'center'}>
            <SimpleGrid
              minChildWidth="280px"
              spacing={5}
              justifyContent={"center"}
            >
              <ProductList data={trendingProducts} />
            </SimpleGrid>
          </Box>
          <Flex my={"40px"} justifyContent={"center"}>
            <Link
              zIndex="1"
              as={NavLink}
              to="/catalog"
              p={"10px 40px"}
              border={"1px solid #000"}
              bg={"transparent"}
              borderRadius={"5px"}
              fontSize={"14px"}
              fontWeight={"700"}
              transition={"all 0.2s ease-in-out"} //добавляем плавную анимацию
              _hover={{ bg: "gray.100" }}
            >
              Посмотреть все
            </Link>
          </Flex>
        </Container>
      </Box>
      {/* <ItemsList
        items={filter(items)}
        headingText={"Бестселлеры"}
        viewAllText={"Посмотреть всё"}
      /> */}
      <HeroSliderReviews />
    </Box>
  );
};

export default HomePage;
