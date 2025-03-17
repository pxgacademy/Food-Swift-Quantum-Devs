import React from "react";
import ThemeMode from "../../components/theme-mode/ThemeMode";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import deliveryIcon from "/food-delivery.png";

const Header = () => {
  return (
    <header className="sticky top-0">
      <nav className="w-full max-w-[1600px] mx-auto py-5 px-5 md:px-8 lg:px-12 flex items-center justify-between bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur">
        {/* left side nav */}
        <Link to="/">
          <div className="flex items-center gap-x-3" role="button">
            <img alt="icon" src={deliveryIcon} className="w-10 h-10" />
            <h3 className="text-xl md:text-2xl font-semibold text-primaryColor">
              Food Swift
            </h3>
          </div>
        </Link>

        {/* Right side nav */}
        <div className="flex items-center gap-x-5">
          <Link to="/login">
            <button className="btn bg-transparent ">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn bg-primaryColor hover:bg-primaryColor/80 text-white">
              Register
            </button>
          </Link>
          <ThemeMode className="cursor-pointer border rounded-full p-2" />

          <Cart />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
