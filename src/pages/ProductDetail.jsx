import React, { useRef } from "react";

import { useParams } from "react-router-dom";
import {
  Box,
  Flex,
  Container,
  Image,
  Text,
  Button,
  HStack,
} from "@chakra-ui/react";

import { motion } from "framer-motion";
import StarFill from "../assets/icons/star-fill.svg";
import StarOutline from "../assets/icons/star-outline.svg";
import items from "../data/items";

const Productdetail = () => {
  const { url } = useParams();
  const product = items.find((item) => item.url === (url));

  const { img, name, price, compound, color, description } = product;

  const MotionButton = motion(Button);

  return (
    <Box py={'60px'}>
      <Container maxW="container.xl">
        <Flex
          gap={{ base: "20px", md: "40px" }}
          alignItems={"start"}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Image src={img} w={"auto"} h={"600px"} objectFit={"contain"} />
          <Flex flexDirection={"column"}>
            <Text
              fontSize={{ base: "40px", md: "26px" }}
              fontWeight={"700"}
              color={"#000f41"}
            >
              {name}
            </Text>
            <HStack spacing={4}>
              <HStack spacing={1}>
                <Image src={StarFill} h={"16px"} />
                <Image src={StarFill} h={"16px"} />
                <Image src={StarFill} h={"16px"} />
                <Image src={StarFill} h={"16px"} />
                <Image src={StarOutline} h={"16px"} />
              </HStack>
              <Text>100 000+ оценок</Text>
            </HStack>
            <HStack>
              <Text fontSize={"24.5px"} fontWeight={"700"} color={"#f44"}>
                {price} &#8381;
              </Text>
              <Text
                fontSize={"14px"}
                fontWeight={"500"}
                color={"#868695"}
                textDecoration={"line-through"}
              >
                3990 &#8381;
              </Text>
            </HStack>
            <HStack>
              <MotionButton
                p={"20px"}
                borderRadius={"10px"}
                fontSize={"16px"}
                fontWeight={600}
                whileHover={{ scale: 1.05 }}
                h={"36px"}
                bg={"#a161ff"}
                _hover={{ bg: "#9F30FF" }}
                w={"150px"}
              >
                <Text fontSize={"16px"} color={"#fff"}>
                  WB
                </Text>
              </MotionButton>
              <MotionButton
                p={"20px"}
                borderRadius={"10px"}
                fontSize={"16px"}
                fontWeight={600}
                whileHover={{ scale: 1.05 }}
                h={"36px"}
                bg={"#005bff"}
                _hover={{ bg: "#286bff" }}
                w={"150px"}
              >
                <Text fontSize={"16px"} color={"#fff"}>
                  OZON
                </Text>
              </MotionButton>
            </HStack>

            <Flex flexDirection={"column"} mt={"40px"}>
              <Text fontSize={"16px"} mb={"20px"}>
                <Box
                  as="span"
                  fontSize={"18px"}
                  color={"#000f41"}
                  fontWeight="bold"
                >
                  Состав:{" "}
                </Box>{" "}
                {compound}
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
                {color}
              </Text>
              <Text fontSize={"16px"} mb={"20px"}>
                <Box
                  as="span"
                  fontSize={"18px"}
                  color={"#000f41"}
                  fontWeight="bold"
                >
                  Особенности:{" "}
                </Box>{" "}
                {color}
              </Text>
            </Flex>
            <Text fontWeight="400" fontSize={"16px"} mb={"20px"}>
              <Box
                as="span"
                fontSize={"18px"}
                color={"#000f41"}
                fontWeight="bold"
              >
                Описание:{" "}
              </Box>{" "}
              {description}
            </Text>
          </Flex>
        </Flex>

        {/*))}*/}
      </Container>
    </Box>
  );
};

export default Productdetail;
