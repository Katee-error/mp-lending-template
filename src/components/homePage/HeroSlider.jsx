import { useState, useEffect, useRef } from "react";
import {
  Box,
  Image,
  Text,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide01 from "../../assets/slider/slide-1.png";
import slide02 from "../../assets/slider/slide-2.png";
import slide03 from "../../assets/slider/slide-3.png";

const HeroSlider = () => {
  const settings = {
    dots: false,
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
  const images = [
      slide01,
    slide02,
    slide03
  ];
  const MotionButton = motion(Button);
  const [isModalOpen, setIsModalOpen] = useState(false); //modal window

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
      width={{ base: '94vw', md: '100vw'}}
      height={{ base: "600px" }}
      minH={'600px'}
      overflow="hidden"
      position="relative"
      textAlign="center"

    >
      <Slider {...settings} ref={sliderRef}>
        {images.map((image, index) => (
          <Box key={index} position="relative" bgColor={'#e8e8e8'} h={'600px'}>
            <Image
                ml={'auto'}
              src={image}
              alt={`Slide ${index + 1}`}
              style={{width: '37%' }}
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
              color={'#515151'}
            >
              <Text fontWeight={500} fontSize={{ base: "66px" }}>
                Покупай заебал
              </Text>
              <Text
                fontWeight={500}
                fontSize={{ base: "18px" }}
                maxW={'650px'}
                mt="-10px"
              >
                ANNEMORE упорно следует своей уникальной философии - создавать вещи для всех аспектов повседневной жизни. Будь то батон или рубашка, каждый продукт разрабатывается с особым вниманием к деталям, чтобы обеспечить высокое качество и надежность.
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
              >Купить

              </Button>

            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  ) : (
    <Box>
      <Skeleton h={{ base: '300px',md:'700px'}} w={'100%'}></Skeleton>
    </Box>
  );
};

export default HeroSlider;
