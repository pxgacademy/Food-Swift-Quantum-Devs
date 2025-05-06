import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import footerImage from "/food-delivery.png";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1600px] mx-auto pt-14 pb-5 px-5 md:px-8 lg:px-12 bg-base-300/50 ">
      <div>
        <div className="flex w-16 h-16 items-center gap-3">
          <img src={footerImage} alt="" />
          <h3 className="text-2xl md:text-4xl bg-base-100 px-8 py-3 rounded font-Lobster text-primary">
            Loizar
          </h3>
        </div>
      </div>

      {/* Footer Bottom */}
      <aside className="mt-10 border-t border-gray-700 pt-4 text-center text-base">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by{" "}
          <span className="font-Lobster">Loizar</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
