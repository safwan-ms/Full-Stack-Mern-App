import React from "react";
import { Link } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import ThemeController from "./ThemeController";
import { IoStorefrontSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="lg:px-10 navbar bg-base-100 backdrop-blur-0">
      {/* Navbar Title */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-lg font-bold uppercase text-md sm:text-xl lg:text-2xl btn btn-ghost "
        >
          <IoStorefrontSharp /> Product Vault
        </Link>
      </div>
      {/* Navbar List */}
      <div className="flex-none">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to={"/create"} className="mt-2 text-xl md:text-2xl ">
              <MdLibraryAdd />
            </Link>
          </li>
          <li>
            <ThemeController />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
