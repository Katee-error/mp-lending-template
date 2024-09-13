import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Routers from "../../router/Routers.jsx";
import { Flex } from "@chakra-ui/react";
import StickyHeader from "./StickyHeader.jsx";

const Layout = () => {
  return (
    <Flex flexDirection={"column"} minH={"100vh"} overflowX={"hidden"}>
      <Header />
      <StickyHeader/>
      <div>
        <Routers />
      </div>
      <Footer />
    </Flex>
  );
};

export default Layout;
// overflow????
