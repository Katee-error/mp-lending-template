import {Button, Card, CardBody, Flex, GridItem, Heading, Image, Stack, Text,} from "@chakra-ui/react";
import {motion} from "framer-motion";
import StarFill from '../../assets/icons/star-fill.svg'
import StarHalf from '../../assets/icons/star-half.svg'

const ItemsCard = ({item, onOpen}) => {
    const MotionCard = motion(GridItem);

    return (
        <MotionCard
            whileHover={{scale: 1.08}}
            onClick={() => onOpen(item.id)}
            cursor="pointer"
        >
            <Card variant={'unstyled'} maxW="sm">
                <CardBody>
                    <Image
                        borderRadius="lg"
                        src={item.img}
                        w={"auto"}
                        h={"auto"}
                        m={"0 auto"}
                    />
                        <Stack mt="2" spacing="1">
                            <Heading fontSize={"20px"} color={'#000f41'} fontFamily={'ITC New Baskerville, serif'}
                                     fontWeight={'500'}
                                     _hover={{color: '#e87200'}}
                                     transition={'all .25s ease'}
                            >{item.name}</Heading>
                            <Text color={"#323e48"} fontSize={'20px'} fontWeight={'700'}>{item.price} &#8381;</Text>
                            <Flex>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarFill} h={'16px'}/>
                                <Image src={StarHalf} h={'16px'}/>
                            </Flex>
                        <Button h={'36px'} bg={'#a161ff'} _hover={{bg: '#9F30FF'}}>
                            <Text fontSize={'14px'} color={'#fff'}>WB</Text>
                        </Button>
                        </Stack>
                </CardBody>
            </Card>
        </MotionCard>
    )
        ;
};

export default ItemsCard;
