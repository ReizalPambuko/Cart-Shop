import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { useCart } from "react-use-cart";
import { CgMenuHotdog } from "react-icons/cg";
import { GrFormClose } from "react-icons/gr";
import "./header.css";
const Header = () => {
  const { totalUniqueItems } = useCart();
  const [navs, setNav] = useState(false);
  return (
    <div className=" bg-gray-900 text-white p-5 fixed w-full max-sm:z-30">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">
          <Link to="/">Electronic Shop</Link>
        </h1>
        <ul
          className={`flex max-sm:absolute max-sm:right-0 max-sm:bg-gray-900 max-sm:flex-col max-sm:text-center transition-all max-sm:p-10 max-sm:rounded-md max-sm:z-0 ${
            navs ? "max-sm:top-[4rem]" : "max-sm:top-[-400px]"
          }`}
        >
          <li>
            <Link to="/">Product</Link>
          </li>
          <li className="mx-5 max-sm:my-9 max-sm:mx-0">
            <Link to="/signup">SignUp</Link>
          </li>
          <li className="relative">
            <Link to="/cart">
              <BiCart className="text-3xl max-sm:text-center max-sm:m-auto" />
              <span className="absolute top-0 right-0 bg-red-500 w-4 h-4 leading-4 text-center rounded-full max-sm:right-2">
                {totalUniqueItems}
              </span>
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setNav(!navs)}
          className="hidden max-sm:block max-sm:bg-white max-sm:text-gray-900 text-2xl"
        >
          {navs ? <GrFormClose /> : <CgMenuHotdog />}
        </div>
      </div>
    </div>
  );
};

export default Header;
