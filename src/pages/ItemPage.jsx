import {Box, Button, Container, Flex, HStack, Image, Text} from "@chakra-ui/react";
import ItemImg from '../assets/items/item-1.jpg'
import StarFill from "../assets/icons/star-fill.svg";
import StarOutline from "../assets/icons/star-outline.svg";
import React from "react";
import {motion} from "framer-motion";
import './style.css'

const MotionButton = motion(Button);

const CatalogPage = (item) => {
    return (

        <Box>
            <Container maxW="container.xl">
                {/*{items.map((item, index) => (*/}
                <Flex
                    gap={{base: "20px", md: "40px"}}
                    alignItems={"start"}
                    flexDirection={{base: "column", md: "row"}}
                >
                    <div className="cards">
                        <div className="card">
                            <div className="thumbs">

                                <div className="place" src='../'></div>
                                <div className="thumb"></div>
                                <div className="place"></div>
                                <div className="thumb"></div>
                                <div className="place"></div>
                                <div className="thumb"></div>


                                {/*    <Image*/}
                            {/*        className={'place'}*/}
                            {/*        // src={item.img}*/}
                            {/*        src={ItemImg}*/}
                            {/*        w={"auto"}*/}
                            {/*        h={"600px"}*/}
                            {/*        objectFit={"contain"}*/}
                            {/*    />*/}
                            {/*    <Image className={'thumb'}*/}
                            {/*        // src={item.img}*/}
                            {/*        src={ItemImg}*/}
                            {/*        w={"auto"}*/}
                            {/*        h={"600px"}*/}
                            {/*        objectFit={"contain"}*/}
                            {/*    />*/}
                            {/*    <Image className={'place'}*/}
                            {/*        // src={item.img}*/}
                            {/*        src={ItemImg}*/}
                            {/*        w={"auto"}*/}
                            {/*        h={"600px"}*/}
                            {/*        objectFit={"contain"}*/}
                            {/*    />*/}

                            </div>
                        </div>

                    </div>
                    <Flex flexDirection={'column'}>
                        <Text fontSize={{base: "40px", md: "26px"}} fontWeight={'700'}
                              color={'#000f41'}>
                            {/*{item.name}*/}
                            Футболка базовая хлопок
                        </Text>
                        <HStack spacing={4}>
                            <HStack spacing={1}>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarOutline} h={'16px'}/>
                            </HStack>
                            <Text>
                                100 000+ оценок
                            </Text>
                        </HStack>
                        <HStack>
                            <Text fontSize={'24.5px'} fontWeight={'700'} color={'#f44'}>
                                {/*{item.price} &#8381;*/}
                                1490 &#8381;
                            </Text>
                            <Text fontSize={'14px'} fontWeight={'500'} color={'#868695'}
                                  textDecoration={'line-through'}>
                                3990 &#8381;
                            </Text>
                        </HStack>
                        <HStack>
                            <MotionButton
                                p={"20px"}
                                borderRadius={"10px"}
                                fontSize={"16px"}
                                fontWeight={600}
                                whileHover={{scale: 1.05}}
                                h={'36px'} bg={'#a161ff'} _hover={{bg: '#9F30FF'}}
                                w={'150px'}
                            >
                                <Text fontSize={'16px'} color={'#fff'}>WB</Text>
                            </MotionButton>
                            <MotionButton
                                p={"20px"}
                                borderRadius={"10px"}
                                fontSize={"16px"}
                                fontWeight={600}
                                whileHover={{scale: 1.05}}
                                h={'36px'} bg={'#005bff'} _hover={{bg: '#286bff'}}
                                w={'150px'}
                            >
                                <Text fontSize={'16px'} color={'#fff'}>OZON</Text>
                            </MotionButton>
                        </HStack>

                        <Flex flexDirection={'column'} mt={'40px'}>
                            <Text fontSize={"16px"} mb={"20px"}>
                                <Box
                                    as="span"
                                    fontSize={"18px"}
                                    color={"#000f41"}
                                    fontWeight="bold"
                                >
                                    Состав:{" "}
                                </Box>{" "}
                                {/*{item.compound}*/}
                                95% хлопок, 5% лайкра
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
                                {/*{item.color}*/}
                                Черный
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
                                {/*{item.color}*/}
                                легкая, тонкая, длинная
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
                            {/*{formatTextWithLineBreaks(item.description)}*/}
                            Невероятно комфортная, приятная к телу базовая футболка правильной длины. Ее удобно
                            заправлять и носить навыпуск, отлично сочетается с простыми и ультрамодными низами.
                            Возможность комбинации многослойных образов всегда смотрится выигрышно и подчеркивает
                            исключительную индивидуальность её обладательницы.
                        </Text>
                    </Flex>
                </Flex>

                {/*))}*/}
            </Container>
        </Box>
    );
};

export default CatalogPage;
