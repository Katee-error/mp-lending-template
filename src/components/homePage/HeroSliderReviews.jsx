import { useEffect, useRef, useState } from "react";
import { Box, Button, Flex, Image, Skeleton, Text } from "@chakra-ui/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import rew1 from "../../assets/rewives/fs.webp";
import rew2 from "../../assets/slider/slide-3.png";

import items from "../../data/items.js";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: false,
    cssEase: "ease",
    pauseOnHover: true,
  };

  const sliderRef = useRef(null);
  const images = [rew1, rew2];

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      let loaded = 0;
      images.forEach((image) => {
        const img = new window.Image();
        img.src = image;
        img.onload = () => {
          loaded++;
          if (loaded === images.length) {
            setImagesLoaded(true);
          }
        };
      });
    };
    loadImages();
  }, [images]);

  return imagesLoaded ? (
    <Box
      id="hero"
      width={{ base: "96vw" }}
      mx={"auto"}
      mb={"40px"}
      height={"600px"}
      overflow="hidden"
      position="relative"
      textAlign="center"
    >
      <Text
        fontSize={"37px"}
        color={"0b0f0e"}
        fontWeight={"500"}
        fontFamily={"ITC New Baskerville, serif"}
        mb="20px"
      >
        Более 1000+ товаров нашего бренда приобрели покупатели
      </Text>
      <Slider {...settings} ref={sliderRef}>
        {items.map((item, index) => (
          <Box
            key={index}
            position="relative"
            bgColor={"#f5f5f5"}
            h={"500px"}
            p={"20px"}
            borderRadius={"10px"}
          >
            <Image
              ml={"auto"}
              my={"auto"}
              src={item.rewImg}
              alt={`Slide ${index + 1}`}
              style={{ width: "450px", height: "450px" }}
              borderRadius={"0px"}
            />
            <Box
              position="absolute"
              top="50%"
              left="40%"
              transform="translate(-50%, -50%)"
              textAlign="start"
              zIndex={1000}
              p="20px"
              width={{ base: "100%", md: "70%" }}
            >
              <Flex
                flexDirection={"column"}
                gap={"80px"}
                justifyContent={"end"}
              >
                <Flex flexDirection={"column"} gap={"40px"}>
                  <Text
                    fontSize={"16px"}
                    lineHeight={"31px"}
                    color={"#222222"}
                    maxW={"76%"}
                  >
                    {item.review}
                  </Text>
                  <Text
                    fontSize={"14px"}
                    fontWeight={"600px"}
                    color={"#0b0f0e"}
                    fontFamily={"ITC New Baskerville, serif"}
                  >
                    {item.author}
                  </Text>
                </Flex>
                <Button
                  p={{ base: "10px 20px", md: "25px 30px" }}
                  borderRadius="10px"
                  fontSize="16px"
                  fontWeight={600}
                  bg="#c98b73"
                  _hover={{ bgColor: "#ae7963" }}
                  whileHover={{ scale: 1.05 }}
                  color="white"
                  w={"fit-content"}
                >
                  Купить
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  ) : (
    <Box>
      <Skeleton h={{ base: "300px", md: "700px" }} w={"100%"}></Skeleton>
    </Box>
  );
};

export default HeroSlider;
