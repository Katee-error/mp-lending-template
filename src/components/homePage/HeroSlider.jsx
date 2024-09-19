import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Button,
  Skeleton,
  HStack,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import items from "../../data/items.js";

import slide01 from "../../assets/slider/slide-1.png";
import slide02 from "../../assets/slider/slide-2.png";
import slide03 from "../../assets/slider/slide-3.png";

const SliderTest = () => {
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
    pauseOnHover: false,
  };

  const sliderRef = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const loadImages = () => {
      let loaded = 0;
      items.forEach((item) => {
        const img = new window.Image();
        img.src = item.img;
        img.onload = () => {
          loaded++;
          if (loaded === items.length) {
            setImagesLoaded(true);
          }
        };
      });
    };
    loadImages();
  }, []);

  return imagesLoaded ? (
    <Box width="100%" mx="auto" height="800px" position="relative">
      <Slider {...settings} ref={sliderRef}>
        {items.map((item, index) => (
          <Box
            key={index}
            flexDirection={{ base: "column", sm: "row-reverse" }}
            display="flex !important"
            alignItems="center"
            justifyContent="space-around"
            bgColor={"#e8e8e8"}
            height="700px"
            borderRadius="10px"
            p="40px"
            mx="auto"
          >
            {/* Изображение */}
            <Image
              src={item.img}
              alt={`Image ${index + 1}`}
              h={"100%"}
              w={{ base: "100%", sm: "50%" }}
              objectFit="contain"
            />

            {/* Блок с текстом */}
            <Flex
              flexDirection="column"
              justifyContent="center"
              textAlign="start"
              width={{ base: "100%", md: "40%" }}
              gap={"20px"}
            >
              <Text fontWeight={500} fontSize={{ base: "30px", md: "66px" }}>
                {item.title}
              </Text>
              <Text
                fontWeight={500}
                fontSize={{ base: "12px", md: "18px" }}
                mt="-10px"
              >
                {item.description}
              </Text>
              <Button
                p={{ base: "10px 20px", md: "25px 30px" }}
                borderRadius="10px"
                fontSize="16px"
                fontWeight={600}
                bg="#c98b73"
                _hover={{ bgColor: "#ae7963" }}
                whileHover={{ scale: 1.05 }}
                color="white"
                mt="20px"
              >
                Купить
              </Button>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  ) : (
    <Box>
      <Skeleton h={{ base: "300px", md: "700px" }} w="100%" />
    </Box>
  );
};

export default SliderTest;
