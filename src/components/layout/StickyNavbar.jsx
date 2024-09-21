import React from "react";
import {Flex, Link,} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";


const StickyNavbar = () => {
    return (
        <Flex
            as={"nav"}
            color={"#0b0f0e"}
            gap={"40px"}
            fontWeight={500}
            fontSize={"14px"}
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"white"}
            display={{base: "none", md: "flex"}}
            minH={'50px'}
        >
            <NavLink to="/home">
                <Link _hover={{color: '#c98b73'}}>
                    Главная
                </Link>
            </NavLink>
            <NavLink to="/catalog" border={"none"}>
                <Link _hover={{color: '#c98b73'}}>
                    Каталог
                </Link>
            </NavLink>
            <NavLink to="/aboutUs" border={"none"}>
                <Link _hover={{color: '#c98b73'}}>
                    О нас
                </Link>
            </NavLink>
        </Flex>
    );
};

export default StickyNavbar;
