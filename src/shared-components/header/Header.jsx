import React from "react";
import ThemeMode from "../../components/theme-mode/ThemeMode";
import PageContainer from "../../components/containers/PageContainer";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0">
      <nav>
        <PageContainer className="flex items-center justify-between py-5 bg-gray-50 dark:bg-gray-800  text-primaryColor">
          {/* left side nav */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Food Swift</h3>
          </div>

          {/* Right side nav */}
          <div className="flex items-center gap-x-5">
            <Link>
              <button className="btn bg-transparent " >Login</button>
            </Link>
            <Link>
              <button className="btn bg-primaryColor hover:bg-primaryColor/80 text-white">Register</button>
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
        </PageContainer>
      </nav>
    </header>
  );
};

export default Header;
