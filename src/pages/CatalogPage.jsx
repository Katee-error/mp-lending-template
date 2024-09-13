import { Box, Container } from "@chakra-ui/react";
import Catalog from "../components/items/Catalog.jsx";

const CatalogPage = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Catalog />
      </Container>
    </Box>
  );
};

export default CatalogPage;
