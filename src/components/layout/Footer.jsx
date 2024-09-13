import {
  Box,
  Container,
  Image,
  Flex,
  Link,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/mp-logo.png";
import telegram from "../../assets/icons/Telegram.svg";
import instagram from "../../assets/icons/brand-instagram.svg";

const Footer = () => {
  return (
    <Box py={"60px"} bg={"#F8F8F8"} as="footer" w="100%" mt="auto">
      <Container maxW="container.lg">
        {/* DESKTOP */}
        <Flex
          justifyContent={"space-between"}
          alignItems={"start"}
          flexDirection={{ base: "column", md: "row" }}
          gap={"30px"}
        >
          <VStack spacing={"20px"} w={"220px"} alignItems={"start"}>
            <NavLink to="/">
              <Image src={logo} alt="logo" w={"200px"} />
            </NavLink>
            <Text fontSize={"12px"} color={"gray.500"}>
              Классный бренд российской одежды, созданный с любовью и душой.
            </Text>
          </VStack>
          <Flex
            justifyContent={"space-between"}
            gap={{ base: "40px", md: "100px" }}
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack alignItems={"start"} spacing={"20px"}>
              <Heading fontSize={"16px"}>Больше:</Heading>
              <VStack alignItems={"start"} fontSize={"14px"} color={"gary.500"}>
                <NavLink to="/aboutUs" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    О нас
                  </Link>
                </NavLink>

                <NavLink to="/catalog" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    Каталог
                  </Link>
                </NavLink>
              </VStack>
            </VStack>
            <VStack alignItems={"start"} spacing={"20px"}>
              <Heading fontSize={"16px"}>Покупайте на:</Heading>
              <VStack alignItems={"start"} fontSize={"14px"} color={"gary.500"}>
                <NavLink to="#">
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    Wildberries
                  </Link>
                </NavLink>
                <NavLink to="#" border={"none"}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                      color: "hover.link",
                    }}
                  >
                    Ozon
                  </Link>
                </NavLink>
              </VStack>
            </VStack>
            <Flex
              justifyContent={"space-between"}
              gap={"70px"}
              alignItems={"center"}
            >
              <VStack alignItems={"start"} spacing={"20px"}>
                <Heading fontSize={"16px"}>Оставайтесь с нами</Heading>

                <Text fontSize={"14px"}>
                  <Link href="#">Telegram</Link>
                  <br />
                  <Link href="#">Instagram</Link>
                </Text>
                <Flex gap={"20px"}>
                  <Link>
                    <Image src={telegram} w={"36px"} />
                  </Link>
                  <Link>
                    <Image src={instagram} w={"36px"} />
                  </Link>
                </Flex>
              </VStack>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;

// прописать desktop
