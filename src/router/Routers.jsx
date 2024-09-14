
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutUsPage from "../pages/AboutUsPage";
import CatalogPage from "../pages/CatalogPage.jsx";
import ItemPage from "../pages/ItemPage.jsx";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/urr" element={<ItemPage />} />
    </Routes>
  );
};

export default Routers;
