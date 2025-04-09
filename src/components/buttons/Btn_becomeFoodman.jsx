import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Btn_becomeFoodman = () => {
  return (
    <Link>
      <button className="btn text-lg text-white md:text-xl bg-primaryColor hover:bg-[#F29F05] mt-8">
        Become a Foodman
        <span>
          <FaLongArrowAltRight />
        </span>
      </button>
    </Link>
  );
};

export default Btn_becomeFoodman;
