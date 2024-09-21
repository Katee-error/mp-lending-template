import React, { useState } from "react";
import {
  Tabs,
  TabList,
  Tab,
  Box,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import items from "../data/items";
import ProductList from "../UI/ProductList";

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все товары");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Фильтрация услуг по названию
  const searchedServices = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фильтрация услуг по категории и результатам поиска
  const filteredServices =
    selectedCategory === "Все товары"
      ? searchedServices
      : searchedServices.filter((item) => item.category === selectedCategory);

  // Получаем уникальные категории из данных
  const categories = [
    "Все товары",
    ...new Set(items.map((item) => item.category)),
  ];

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    const selectedCategory = categories[index];

    // Если выбрана категория "Все услуги", сбрасываем фильтры
    if (selectedCategory === "Все товары") {
      setSearchTerm(""); // Сбросить поисковый запрос
    }
    setActiveIndex(index);
    setSelectedCategory(selectedCategory);
  };

  return (
    <Box py={'60px'}>
      <Container maxW={"container.xl"}>
        <InputGroup mb={"40px"}>
          <InputLeftElement pointerEvents="none" px={"10px"}>
            <FiSearch size={"20px"} />
          </InputLeftElement>
          <Input
            fontSize={"16px"}
            bg={"white"}
            py={"20px"}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Поиск по услугам"
            focusBorderColor={"brand.main"}
          />
        </InputGroup>
        <Box className="tabs-container">
          <Tabs
            position="relative"
            variant="unstyled"
            isLazy
            index={currentIndex}
            onChange={(index) => setSelectedCategory(categories[index])}
          >
            <Box className="tabs-wrapper" borderBottom={"1px solid #E2E8F0"}>
              <TabList className="scrolling-tabs" position="relative">
                {categories.map((category, index) => (
                  <Tab
                    key={index}
                    fontSize={"18px"}
                    fontWeight={600}
                    color={"gray.500"}
                    mr={"20px"}
                    position="relative"
                    onClick={() => handleTabClick(index)}
                  >
                    {category}
                    {activeIndex === index && (
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        width="100%"
                        height="2px"
                        bg="brand.main"
                        transition="all 0.3s ease"
                      />
                    )}
                  </Tab>
                ))}
              </TabList>
            </Box>
            {filteredServices.length === 0 ? (
              <Heading py="60px">Товары не найдены</Heading>
            ) : (
              <Box py={"60px"}>
                <SimpleGrid minChildWidth="300px">
                  <ProductList data={filteredServices} />
                </SimpleGrid>
              </Box>
            )}
          </Tabs>
        </Box>{" "}
      </Container>
    </Box>
  );
};

export default Catalog;
