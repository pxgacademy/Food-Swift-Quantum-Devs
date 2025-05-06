import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Btn_becomeFoodman = () => {
  return (
    <Link>
      <button className="btn btn-lg btn-primary">
        Become a Foodman
        <span>
          <FaLongArrowAltRight />
        </span>
      </button>
    </Link>
  );
};

export default Btn_becomeFoodman;
