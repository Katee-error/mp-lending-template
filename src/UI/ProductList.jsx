import React, { useState } from "react";
import ProductCard from "./ProductCard";
import items from "../data/items";
import ItemsModal from "../components/items/ItemsModalWindow";


const ProductList = ({data}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (ItemId) => {
    const item = items.find((item) => item.id === ItemId);
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };
  return (
    <>
      {
      data?.map((item, index) => (
        <ProductCard item={item} key={index} onOpen={handleOpenModal}/>
      ))
      }
      <ItemsModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProductList;
