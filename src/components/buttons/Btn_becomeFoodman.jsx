import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Btn_becomeFoodman = () => {
  return (
    <Link>
      <button className="btn btn-lg btn-secondary">
        <span>Become a Foodman</span>
        <FaLongArrowAltRight />
      </button>
    </Link>
  );
};

export default Btn_becomeFoodman;
