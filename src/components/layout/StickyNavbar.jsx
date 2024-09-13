import React from "react";
import {Flex, Link,} from "@chakra-ui/react";
import {NavLink} from "react-router-dom";


const StickyNavbar = () => {
    return (
        <Flex
            as={"nav"}
            color={"#0b0f0e"}
            gap={"40px"}
            fontWeight={400}
            fontSize={"14px"}
            alignItems={"center"}
            justifyContent={"center"}
            bgColor={"white"}
            display={{base: "none", md: "flex"}}
            minH={'50px'}
        >
            <NavLink to="/home">
                <Link _hover={{textDecoration: "underline"}}>
                    Главная
                </Link>
            </NavLink>
            <NavLink to="/catalog" border={"none"}>
                <Link _hover={{textDecoration: "underline"}}>
                    Каталог
                </Link>
            </NavLink>
            <NavLink to="/aboutUs" border={"none"}>
                <Link _hover={{textDecoration: "underline"}}>
                    О нас
                </Link>
            </NavLink>
        </Flex>
    );
};

export default StickyNavbar;
