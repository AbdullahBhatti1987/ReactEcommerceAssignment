import React from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-xl">E-Commerce</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={"/"} className="mr-5 hover:text-gray-900">Home</Link>
          <Link to={"bestseller"} className="mr-5 hover:text-gray-900">Best Seller</Link>
          <Link to={"products"} className="mr-5 hover:text-gray-900">Products</Link>
          <Link to={"aboutus"} className="mr-5 hover:text-gray-900">About Us</Link>
          <Link to={"contactus"} className="mr-5 hover:text-gray-900">Contact Us</Link>
        </nav>
        <div className="flex gap-3">
          <Link to={"search"}><CiSearch className="text-xl"/></Link>
          <Link to={"auth"}><CiUser className="text-xl"/></Link>
          <Link to={"cart"}><CiShoppingCart className="text-xl"/></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
