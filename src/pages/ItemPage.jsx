import {
    Box,
    Container,
    Flex,
    Image,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    Text
} from "@chakra-ui/react";
import Catalog from "../components/items/Catalog.jsx";
import HeroSlider from "../components/homePage/HeroSlider.jsx";
import StarFill from "../assets/icons/star-fill.svg";
import StarOutline from "../assets/icons/star-outline.svg";
import formatTextWithLineBreaks from "../services/split.jsx";
import items from "../data/items.js";




const CatalogPage = (item) => {
  return (
    <Box>
      <Container maxW="container.xl">
              <Flex
                  gap={{ base: "20px", md: "40px" }}
                  alignItems={"center"}
                  flexDirection={{ base: "column", md: "row" }}
              >
                  <Image
                      src={item.img}
                      w={"auto"}
                      h={"600px"}
                      objectFit={"contain"}
                  />
                  <Box>
                      <Flex
                          justifyContent={"space-between"}
                          alignItems={"baseline"}
                          flexDirection={{ base: "column", md: "row" }}
                          px={"0px"}
                          gap={"20px"}
                      >
                          <Text fontSize={{ base: "40px", md: "26px" }} ml={'20px'} fontWeight={'700'} maxW={'150px'} color={'#000f41'}>
                              {item.name}
                          </Text>
                          <Flex flexDirection={'column'} justifyContent={'space-between'} h={'70px'}>
                              <Text fontSize={'24.5px'} fontWeight={'700'}>
                                  {item.price} &#8381;
                              </Text>
                              <Flex >
                                  <Image src={StarFill} h={'16px'}/>
                                  <Image src={StarFill} h={'16px'}/>
                                  <Image src={StarFill} h={'16px'}/>
                                  <Image src={StarFill} h={'16px'}/>
                                  <Image src={StarOutline} h={'16px'}/>
                              </Flex>
                          </Flex>
                      </Flex>
                          <Text fontSize={"16px"} mb={"20px"}>
                              <Box
                                  as="span"
                                  fontSize={"18px"}
                                  color={"#000f41"}
                                  fontWeight="bold"
                              >
                                  Состав:{" "}
                              </Box>{" "}
                              {item.compound}
                          </Text>
                          <Text fontSize={"16px"} mb={"20px"}>
                              <Box
                                  as="span"
                                  fontSize={"18px"}
                                  color={"#000f41"}
                                  fontWeight="bold"
                              >
                                  Цвет:{" "}
                              </Box>{" "}
                              {item.color}
                          </Text>
                          <Text fontWeight="400" fontSize={"16px"} mb={"20px"}>
                              <Box
                                  as="span"
                                  fontSize={"18px"}
                                  color={"#000f41"}
                                  fontWeight="bold"
                              >
                                  Описание:{" "}
                              </Box>{" "}
                              {formatTextWithLineBreaks(item.description)}
                          </Text>
                  </Box>
              </Flex>

      </Container>
    </Box>
  );
};

export default CatalogPage;
