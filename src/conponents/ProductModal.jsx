const ProductModal = ({ product, onClose, onNavigate }) => {
    return (
      <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 labelofshoe ">
        <div className="bg-white p-6 rounded-lg w-[90%] max-w-4xl relative sm:flex-col">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-black text-2xl "
            onClick={onClose}
          >
            &times;
          </button>
  
          <div className="flex gap-6">
            {/* Image Section */}
            <div className="flex items-center">
              <button
                className="text-2xl px-4 py-2 bg-gray-300 rounded-full cursor-pointer arrowofshoe1"
                onClick={() => onNavigate("prev")}
              >
                &lt;
              </button>
              <img
                src={product.imgURL}
                alt={product.name}
                className="w-[300px] h-[300px] object-cover mx-4 imageofshoe"
              />
              <button
                className="text-2xl px-4 py-2 bg-gray-300 rounded-full cursor-pointer arrowofshoe2"
                onClick={() => onNavigate("next")}
              >
                &gt;
              </button>
            </div>
  
            {/* Description Section */}
            <div className="flex flex-col justify-between writingofshoe">
              <h2 className="text-3xl font-bold">{product.name}</h2>
              <p className="text-lg mt-4">{product.description}</p>
              <p className="mt-6 text-coral-red text-xl font-semibold">
                {product.price}
              </p>
              <button className="mt-6 px-6 py-3 bg-coral-red text-white font-bold rounded buttonofshoe">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  
  export default ProductModal ;