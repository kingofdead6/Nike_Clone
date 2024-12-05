import { useState } from "react";
import { products } from "../constants";
import PopularProductCard from "../conponents/PopularProductCard.jsx";
import ProductModal from "../conponents/ProductModal";

const PopularProducts = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpenModal = (index) => {
    setSelectedProduct(products[index]);
    setCurrentIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleNavigate = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? products.length - 1 : prevIndex - 1
      );
    } else if (direction === "next") {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }
    setSelectedProduct(products[currentIndex]);
  };

  return (
    <section id="Products" className="max-container max-sm:mt-12 ">
      <div className="flex flex-col justify-start gap-5 popularissmall">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Discover our collection of the most sought-after products, carefully
          selected to meet your needs. Whether you're looking for quality,
          innovation, or the latest trends, these popular items have captured
          the attention of our customers. Explore and find your next favorite
          today!
        </p>
      </div>

      <div
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
                       grid-cols-1 sm:gap-4 gap-14 smallitemshoe"
      >
        {products.map((product, index) => (
          <PopularProductCard
            key={product.name}
            {...product}
            onOpen={() => handleOpenModal(index)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onNavigate={handleNavigate}
        />
      )}
    </section>
  );
};

export default PopularProducts;
