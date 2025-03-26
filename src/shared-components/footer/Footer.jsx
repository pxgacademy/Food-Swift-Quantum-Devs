import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
// This is comment one
// This is comment two
  return (
    <footer className="w-full max-w-[1600px] mx-auto pt-14 pb-5 px-5 md:px-8 lg:px-12 bg-gray-100 dark:bg-gray-800">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left ">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold flex justify-center md:justify-start items-center gap-2">
            Food Swift
          </h2>
          <p className="mt-4 text-lg">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere.
          </p>
        </div>
        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold">MENU</h3>
          <ul className="mt-2 space-y-2 text-lg">
            <li>
              <Link to="" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-yellow-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-yellow-500">
                Restaurants
              </Link>
            </li>
            <li>
              <Link to="" className="hover:text-yellow-500">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        {/* Right Section */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="text-lg font-semibold">CONTACTS</h3>
          <p className="mt-2 text-lg">
            1717 Harrison St, San Francisco, CA 94103, United States
          </p>
          <p className="mt-2 text-yellow-500 text-lg">quickeat@mail.net</p>
          <p className="mt-2 text-lg">+1 425 326 16 27</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <FaFacebook className="text-2xl hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>Copyright © 2025. All rights reserved - Food Swift</p>
      </div>
    </footer>
  );
};

export default Footer;
