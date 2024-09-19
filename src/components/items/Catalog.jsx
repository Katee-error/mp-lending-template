import { useState } from "react";
import {
  Box,
  Container,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import items from "../../data/items.js";
import ItemsList from "./ItemsList.jsx";

const ServicesPage = (item, onOpen) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все товары");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // Фильтрация услуг по названию
  const searchedServices = items.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Фильтрация услуг по категории и результатам поиска
  const filteredServices =
    selectedCategory === "Все товары"
      ? searchedServices
      : searchedServices.filter(
          (service) => service.category === selectedCategory
        );

  // Получаем уникальные категории из данных
  const categories = [
    "Все товары",
    ...new Set(items.map((service) => service.category)),
  ];

  const handleTabClick = (index) => {
    setCurrentIndex(index);
    setSelectedCategory(categories[index]);
  };

  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <Box>
      <Box>
        <Container maxW="container.xl">
          <Heading
            fontSize={{ base: "30px", md: "50px" }}
            fontWeight={"300"}
            mb={{ base: "20px", md: "40px" }}
          >
            Каталог
          </Heading>

          <Box>
            <InputGroup mb={"40px"}>
              <InputLeftElement pointerEvents="none" px={'10px'}>
                <FiSearch size={'20px'}/>
              </InputLeftElement>
              <Input
                fontSize={"16px"}
                bg={"white"}
                py={"20px"}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск по товарвм"
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
                <Box
                  className="tabs-wrapper"
                  borderBottom={"1px solid #E2E8F0"}
                >
                  <TabList className="scrolling-tabs" position="relative">
                    {categories.map((category, index) => (
                      <Tab
                        key={index}
                        fontSize={"18px"}
                        fontWeight={600}
                        color={"gray.500"}
                        mr={"20px"}
                        position="relative"
                        onClick={() => handleTabChange(index)}
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
                  <Heading py="60px">Товар не найден</Heading>
                ) : (
                  <TabPanels >
                    {categories.map((category, index) => (
                      <TabPanel key={index}>
                        <ProductList data={filteredServices} />
                      </TabPanel>
                    ))}
                  </TabPanels>
                )}
              </Tabs>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesPage;
