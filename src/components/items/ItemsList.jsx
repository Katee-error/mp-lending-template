import {Box, Container, Flex, Heading, SimpleGrid, Text,} from "@chakra-ui/react";
import {useState} from "react";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
import ItemsModal from "./ItemsModalWindow.jsx";
import ItemsCard from "./ItemsCard.jsx";
import {NavLink} from "react-router-dom";

const MotionBox = motion(Box);

const ItemsList = (props) => {


    const {ref, inView} = useInView({
        triggerOnce: true, // Анимация запускается только один раз
        threshold: 0.3, // Процент видимой области, после которого запускается анимация
    });

    const [selectedItem, setSelectedItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (ItemId) => {
        const item = props.items.find((doc) => doc.id === ItemId);
        setSelectedItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedItem(null);
    };

    const renderHeading = (headingText) => {
        if (!headingText) {
            return;
        }

        return (
            <Flex justifyContent={"center"} pb={"10px"}>
                <Heading
                    fontSize={{base: "40px", md: "50px"}}
                    fontWeight={"300"}
                    maxW={"500px"}
                >
                    {headingText}
                </Heading>
            </Flex>
        )
    }

    const renderViewAll = (viewAllText) => {
        if (!viewAllText) {
            return;
        }

        return (
            <Flex my={'25px'} justifyContent={'center'}>
                <Text zIndex='1' as={NavLink} to='/catalog' color={'#be7332'} fontSize={'12px'} fontWeight={'600'}
                      borderBottom={'1px solid #be7332'}
                      transition={"all 0.4s ease-in-out"} //добавляем плавную анимацию
                      _hover={{
                          color: "#ffffff",
                          bg: "#be7332"  //добавляем параметры при наведении
                      }}>
                    {viewAllText}
                </Text>
            </Flex>
        )
    }

    return (
        <MotionBox
            my={"120px"}
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 50}}
            transition={{duration: 0.6, ease: "easeOut"}}
        >
            <Container maxW="container.xl">
                {renderHeading(props.headingText)}

                <SimpleGrid minChildWidth="250px" p={"20px"} spacing={"40px"}>
                    {props.items.map((item) => (
                        <ItemsCard
                            key={item.id}
                            item={item}
                            onOpen={handleOpenModal}
                        />
                    ))}
                </SimpleGrid>
                {renderViewAll(props.viewAllText)}
                <ItemsModal
                    item={selectedItem}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                />
            </Container>
        </MotionBox>
    );
};

export default ItemsList;
