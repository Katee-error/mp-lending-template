import { useState } from "react";
import { Box, Image } from "@chakra-ui/react";
import { useSwipeable } from "react-swipeable";

const HoverSlider = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Функции для смены изображений
  const showNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Свайп обработчики для мобильных устройств
  const handlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPrevImage,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, 
  });

  const handleMouseMove = (event) => {
    if (!images || images.length === 0) return; 
    const { left, width } = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - left;
    const newIndex = Math.floor((x / width) * images.length);
    setActiveIndex(newIndex);
  };

  const isMobile = window.innerWidth <= 768;

  if (!images || images.length === 0) {
    return <Box>Нет изображений</Box>;
  }
  return (
    <Box
      position="relative"
      width="100%"
      height="auto"
      
      {...(isMobile ? handlers : {})} // Используем свайп на мобильных устройствах
      onMouseMove={!isMobile ? handleMouseMove : undefined} // Используем курсор на десктопе
    >
      {/* Основное изображение */}
      <Image
        src={images[activeIndex]}
        alt="Product"
        objectFit="contain"
        width="100%"
        height="100%"
        borderRadius={'5px'}
        transition="opacity 0.3s ease-in-out"
      />
    </Box>
  );
};

export default HoverSlider;
