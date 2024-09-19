import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  Flex,
  HStack,
  useMediaQuery
} from "@chakra-ui/react";
import StarFill from "./../assets/icons/star-fill.svg";
import StarHalf from "./../assets/icons/star-half.svg";
import HoverSlider from "./Slider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, onOpen }) => {
  const [isMobile] = useMediaQuery("(max-width: 768px)"); // Мобильные устройства
  const navigate = useNavigate(); 

  const handleClick = () => {
    if (isMobile) {
      // Если мобильное устройство, перенаправляем на страницу товара
      navigate(`/catalog/${item.url}`);
    } else {
      // Если десктоп, открываем модальное окно
      onOpen(item.id);
    }
  };

  return (
    <Card
      maxW="sm"
      p={"20px 15px"}
      boxShadow={"none"}
      onClick={handleClick} // обработчик на клик
      cursor="pointer"
    >
      <CardBody p="none">
        <HoverSlider images={item.imgAll} />
        <Stack mt="6px">
          <Heading
            fontSize={"20px"}
            color={"#000f41"}
            fontFamily={"ITC New Baskerville, serif"}
            fontWeight={"500"}
            _hover={{ color: "#e87200" }}
            transition={"all .25s ease"}
          >
            {item.name}
          </Heading>
          <HStack alignItems={"center"} justifyContent={"space-between"}>
            <Text color={"#323e48"} fontSize={"24px"} fontWeight={"700"}>
              {item.price} &#8381;
            </Text>
            <Flex>
              <Image src={StarFill} h={"16px"} />
              <Image src={StarFill} h={"16px"} />
              <Image src={StarFill} h={"16px"} />
              <Image src={StarFill} h={"16px"} />
              <Image src={StarHalf} h={"16px"} />
            </Flex>
          </HStack>
          <Button
            h={"36px"}
            bg={"#a161ff"}
            _hover={{ bg: "#9F30FF" }}
            mt={"20px"}
          >
            <Text fontSize={"14px"} color={"#fff"}>
              WB
            </Text>
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
