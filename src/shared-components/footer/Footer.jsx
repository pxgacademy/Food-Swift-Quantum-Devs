import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import footerImage from "/food-delivery.png";

const Footer = () => {
  return (
    <footer className="w-full max-w-[1600px] mx-auto pt-14 pb-5 px-5 md:px-8 lg:px-12 bg-base-300/50 ">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-4">
        <div className="col-span-2 sm:col-span-3 lg:col-span-2 border-b lg:border-none pb-2.5 lg:pb-0">
          <Link to="/">
            <div className="flex w-16 h-16 items-center gap-3">
              <img src={footerImage} alt="" />
              <h3 className="text-2xl md:text-4xl bg-base-100 px-8 py-3 rounded font-Lobster text-primary">
                Loizar
              </h3>
            </div>
          </Link>
        </div>

        <div>
          <h6 className="footer-title">Company</h6>
          <div className="flex flex-col space-y-1">
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
        </div>

        <div>
          <h6 className="footer-title">Legal</h6>
          <div className="flex flex-col space-y-1">
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </div>

        <div>
          <h6 className="footer-title">Social</h6>
          <div className="flex flex-col space-y-1">
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">Instagram</a>
            <a className="link link-hover">Facebook</a>
            <a className="link link-hover">GitHub</a>
          </div>
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
