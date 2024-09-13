import {NavLink} from "react-router-dom";

import {Box, Flex, Image, Input, InputGroup, InputLeftElement, Link} from "@chakra-ui/react";

import logo from "../../assets/logo/mp-logo.png";

import wbIcon from "../../assets/icons/wb.svg";
import ozonIcon from "../../assets/icons/ozon.svg";
import instagramIcon from "../../assets/icons/brand-instagram.svg";
import Telegram from '../../assets/icons/Telegram.svg'

import Navbar from "./Navbar.jsx";
import {FiSearch} from "react-icons/fi";

const Header = () => {


    return (
        <Box
            as="nav"
            position="relative"
            top={0}
            left={0}
            width="100%"
            backgroundColor="white"
            py="20px"
            px={"10px"}
            zIndex={5}
        >
            <Box
                borderBottom={'1px solid rgba(11, 15, 14, 0.15)'}
            >
                <Flex
                    as={"header"}
                    justifyContent={"space-between"}
                    gap={"50px"}
                    alignItems={"center"}
                    mx={'12px'}
                    minH={'90px'}
                    display={{base: "none", md: "flex"}}
                >
                    <InputGroup maxW={'25%'}>
                        <InputLeftElement pointerEvents="none">
                            <FiSearch size={'20px'}/>
                        </InputLeftElement>
                        <Input
                            fontSize={"16px"}
                            bg={"white"}
                            py={"20px"}
                            type="text"
                            // value={searchTerm}
                            // onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Поиск по товарам"
                            focusBorderColor={"transparent"}
                            border={'none'}
                            _hover={{
                                boxShadow: "0px 7px 10px 0px rgba(37, 37, 37, 0.1)"
                            }}
                            _focus={{
                                boxShadow: "0px 7px 10px 0px rgba(37, 37, 37, 0.1)"
                            }}
                        />
                    </InputGroup>
                    <Link as={NavLink} to="/">
                        <Image
                            src={logo}
                            alt="logo"
                            h={"50px"}
                            objectFit={"contain"}
                        />
                    </Link>
                    <Flex
                        justifyContent={"space-between"}
                        gap={"30px"}
                        fontSize={"13px"}
                        fontWeight={500}
                        alignItems={"center"}
                        maxW={'25%'}
                    >
                        <Link href='#'>
                            <Image
                                src={wbIcon}
                                height={"30px"}
                            />
                        </Link>
                        <Link href='#'>
                            <Image
                                src={ozonIcon}
                                color={"#3a3a9c"}
                                height={"25px"}
                            />
                        </Link>
                        <Link href='#'>
                            <Image
                                src={instagramIcon}
                                height="25px"
                            />
                        </Link>
                        <Link href="#">
                            <Image
                                src={Telegram}
                                height={'25px'}
                            />
                        </Link>
                    </Flex>
                </Flex>
            </Box>
            <Navbar/>

        </Box>
    );
};

export default Header;
