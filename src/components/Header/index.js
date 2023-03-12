import React from "react";
import {searchIcon} from "../../components/assets/index";
import "./style.css";

const index = () => {
  return (
    <header className="header flex justify-sb">
        <div className="logo">
        <img className="logo-image" src="https://i.pinimg.com/550x/d1/79/c5/d179c5c424ed339058effcb85c3f0f49.jpg" alt="W" />
        </div>
        <div>
        <img src={searchIcon} alt="Search" />
      </div>
    </header>
  )
};

export default index;
