import React from "react";
import { useCart } from "react-use-cart";
import { numberWithCommas } from "../../numbers/Numbers";
import "./cart.css";
const Cart = () => {
  const { isEmpty, totalUniqueItems, items, updateItemQuantity, removeItem } =
    useCart();

  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div className="container mx-auto py-24">
      <table className="w-full m-6 max-sm:mx-auto max-sm:w-[90%] max-sm:p-5 max-sm:overflow-x-scroll max-sm:flex max-sm:flex-col">
        <tbody>
          {items.map((item) => {
            return (
              <tr className="text-center font-semibold">
                <td className="w-48 border-none p-6 max-sm:w-full">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-lg max-sm:w-full"
                  />
                </td>
                <td className="border-none p-6">
                  <h3> {item.name} &mdash;</h3>
                </td>
                <td className="border-none p-6">
                  Rp {numberWithCommas(item.price)}
                </td>
                <td className="border-none p-6 max-sm:flex">
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                    className="border border-gray-700 px-3 bg-gray-900 text-white py-1 max-sm:px-3 max-sm:py-2"
                  >
                    +
                  </button>
                  <span className="border border-gray-700 w-5 py-2 px-2 max-sm:w-10">
                    {item.quantity} x
                  </span>
                  <button
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                    className="border border-gray-700 px-3 py-1 bg-gray-200 max-sm:px-3 max-sm:py-2"
                  >
                    -
                  </button>
                </td>
                <td className="border-none ">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="border border-gray-700 py-1 px-3"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
