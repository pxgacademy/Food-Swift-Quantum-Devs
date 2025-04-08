import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Btn_partnerWithUs = () => {
  return (
    <Link>
      <button className="btn text-lg text-white md:text-xl bg-primaryColor hover:bg-[#F29F05] mt-8">
        Partner with us
        <span>
          <FaLongArrowAltRight />
        </span>
      </button>
    </Link>
  );
};

export default Btn_partnerWithUs;
