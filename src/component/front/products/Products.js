import React from "react";
import { numberWithCommas } from "../../numbers/Numbers";
import { useCart } from "react-use-cart";

const Products = ({ productItem }) => {
  const { addItem } = useCart();
  return (
    <div>
      {productItem.map((products) => {
        return (
          <>
            <div class="container mx-auto max-sm:text-center">
              <div className="w-[23%] float-right mt-32 shadow-lg shadow-gray-300 p-8 max-sm:w-full max-sm:mt-20 mx-3 max-sm:mx-0">
                {" "}
                <img
                  src={products.image}
                  alt=""
                  className="w-[95%] rounded-lg"
                />
                <h2 className="text-xl mt-5">{products.name}</h2>
                <p className="mt-4">
                  <strong>Rp {numberWithCommas(products.price)}</strong>
                </p>
                <button
                  className=" shadow-md shadow-gray-700 bg-gray-700 text-zinc-100 px-5 py-3 rounded-md outline-none mt-4 border-none font-semibold transition-colors hover:bg-gray-900"
                  onClick={() => addItem(products)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Products;
