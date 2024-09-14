import formatTextWithLineBreaks from "../../services/split";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Image,
  Flex,
  Box, Heading,
} from "@chakra-ui/react";
import StarFill from '../../assets/icons/star-fill.svg'
import StarOutline from '../../assets/icons/star-outline.svg'


const ItemsModal = ({ item, isOpen, onClose }) => {
  if (!item) return null; // Возвращаем null, если doctor не определен

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="1000px" p={{ base: "20px", md: "40px" }}>
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
            <ModalCloseButton />
            <ModalBody mt={'40px'}>
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
            </ModalBody>
            <ModalFooter></ModalFooter>
          </Box>
        </Flex>
      </ModalContent>
    </Modal>
  );
};
export default ItemsModal;
