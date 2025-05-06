import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Btn_partnerWithUs = () => {
  return (
    <Link to='restaurant-form' >
      <button className="btn btn-lg btn-secondary">
        Partner with us
        <span>
          <FaLongArrowAltRight />
        </span>
      </button>
    </Link>
  );
};

export default Btn_partnerWithUs;
