import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

import Modal from "../modal/Modal";

const Nav = ( {openModal }) => {


  return (
    <header>
      <nav>
        <Link to="/">
          <img
            src="https://pouchain.com.br/wp-content/uploads/2021/12/LOGO-branco-png.png"
            alt="logo"
          />
        </Link>
        <ul>
          <Link to="/" className="tag-link">
            <li>Home</li>
          </Link>
          <li onClick={openModal}>Fale com uma vendedora</li>
        </ul>
      </nav>

    </header>
  );
};

export default Nav;
