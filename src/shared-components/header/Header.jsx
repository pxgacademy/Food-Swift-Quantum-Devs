import React from "react";
import ThemeMode from "../../components/theme-mode/ThemeMode";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import deliveryIcon from "/food-delivery.png";
import useContextValue from "../../hooks/useContextValue";
import { FaUser } from "react-icons/fa";
import Logout from "../../components/logout/Logout";

const Header = () => {
  const { user } = useContextValue();

  //
  return (
    <header className="sticky top-0 z-50">
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
          {!user && (
            <>
              <Link to="/login">
                <button className="btn bg-transparent ">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn bg-primaryColor hover:bg-primaryColor/80 text-white">
                  Register
                </button>
              </Link>
            </>
          )}

          <ThemeMode className="cursor-pointer border rounded-full p-2" />

          <Cart />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar text-center"
            >
              <div className="w-10 rounded-full">
                {user ? <img alt="" src={user?.photoURL} /> : <span className=" w-full h-full text-3xl flex items-center justify-center" >
                <FaUser /></span>}
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
                <Logout/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
