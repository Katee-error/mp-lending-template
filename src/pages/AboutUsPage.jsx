import {Box, Card, Container, Heading, Text, VStack,} from "@chakra-ui/react";

import {motion} from "framer-motion";

const AboutUsPage = () => {
    const MotionCard = motion(Card);

    return (
        <Box py={{md: "60px"}}>
            <Container maxW="container.xl">
                <Heading
                    fontSize={{base: "40px", md: "50px"}}
                    fontWeight={"300"}
                    mb={{base: "20px", md: "40px"}}
                >
                    О нас
                </Heading>
                <VStack alignItems={"start"} spacing={"20px"} fontSize={"18px"}>
                    <Text w={"70%"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>


                </VStack>
                <Box
                    display={"none"}
                    id="hero"
                    width={{base: "100%", md: "80%"}}
                    height={{
                        base: "300px",
                        xs: "565px",
                        sm: "600px",
                        md: "650px",
                        lg: "700px",
                        xl: "900px",
                    }}
                    overflow="hidden"
                    position="relative"
                    py={{base: "0", md: "60px"}}
                    m={"0 auto"}
                    borderRadius={"20px"}
                ></Box>
            </Container>
        </Box>
    );
};

export default AboutUsPage;
