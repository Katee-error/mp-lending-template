import { Box } from "@chakra-ui/react";
import AboutUs from "../components/homePage/AboutUs.jsx";
import HeroSlider from "../components/homePage/HeroSlider.jsx";
import items from "../data/items.js";
import HeroSliderReviews from "../components/homePage/HeroSliderReviews.jsx";
import ItemsList from "../components/items/ItemsList.jsx";

function filter(items) {
    return items.slice(0, 3);
}

const HomePage = () => {
  return (
    <Box>
      <HeroSlider />
      <AboutUs />
        <ItemsList items={filter(items)} headingText={'Бестселлеры'} viewAllText={'Посмотреть всё'}/>
        <HeroSliderReviews/>
    </Box>
  );
};

export default HomePage;
