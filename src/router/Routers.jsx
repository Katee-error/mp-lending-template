import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import AboutUsPage from "../pages/AboutUsPage";
import Productdetail from "../pages/ProductDetail.jsx";
import Catalog from "../pages/Shop.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/aboutUs" element={<AboutUsPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:url" element={<Productdetail />} />
    </Routes>
  );
};

export default Routers;
