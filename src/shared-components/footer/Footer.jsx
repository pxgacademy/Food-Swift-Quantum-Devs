import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (

    <footer className="bg-gray-900 w-full text-gray-300 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left ">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-white flex justify-center md:justify-start items-center gap-2">
            <span className="text-yellow-500">QUICK</span>EAT
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor
            lacus luctus accumsan tortor posuere.
          </p>
        </div>
        {/* Middle Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-400">MENU</h3>
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
          <h3 className="text-lg font-semibold text-gray-400">CONTACTS</h3>
          <p className="mt-2 text-gray-400 text-lg">
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
      <div className=" max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-4 text-gray-400 text-center text-sm md:flex md:justify-between">
        <p>Copyright © 2022. Quickeat. All rights reserved.</p>
        <div className="flex justify-center md:justify-end space-x-4 mt-2 md:mt-0">
          <Link to="" className="hover:text-yellow-500">
            Privacy Policy
          </Link>
          <Link to="" className="hover:text-yellow-500">
            Terms & Services
          </Link>
        </div>
      </div>
    </footer>
    <div>
      <h3 className="text-xl text-center">..... FOOTER ..... </h3>
      
    </div>

  );
};

export default Footer;
