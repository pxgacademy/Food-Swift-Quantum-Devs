import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import deliveryIcon from "/food-delivery.png";
import useContextValue from "../../hooks/useContextValue";
import { FaUser } from "react-icons/fa";
import Logout from "../../components/logout/Logout";
import DefineTheme from "../../components/theme-mode/DefineTheme";

const Header = () => {
  const { user } = useContextValue();

  //
  return (
    <header className="sticky top-0 z-50">
      <nav className="w-full max-w-[1600px] mx-auto py-5 px-5 md:px-8 lg:px-12 flex items-center justify-between backdrop-blur bg-base-300/70">
        {/* left side nav */}
        <Link to="/">
          <div className="flex items-center gap-x-3" role="button">
            <img alt="icon" src={deliveryIcon} className="w-10 h-10" />
            <h3 className="text-2xl md:text-2xl bg-base-100 px-5 py-1 rounded font-Lobster text-primary">
              Loizar
            </h3>
          </div>
        </Link>

        {/* Right side nav */}
        <div className="flex items-center gap-x-5">
          {!user && (
            <>
              <Link to="/login">
                <button className="btn btn-neutral">Login</button>
              </Link>
              <Link to="/register">
                <button className="btn btn-primary">Register</button>
              </Link>
            </>
          )}

          <DefineTheme />

          {user && (
            <>
              <Cart />
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar text-center"
                >
                  <div className="w-10 rounded-full">
                    {user ? (
                      <img alt="" src={user?.photoURL} />
                    ) : (
                      <span className=" w-full h-full text-3xl flex items-center justify-center">
                        <FaUser />
                      </span>
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
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
                    <Logout />
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
