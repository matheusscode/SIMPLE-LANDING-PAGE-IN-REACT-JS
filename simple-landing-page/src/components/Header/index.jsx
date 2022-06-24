import React from "react";
import "./style.css";
import Logo from "./img/logo-robo-img1.png";


function openMenu() {
  document.querySelector('.menu').style.display = 'flex'
  document.querySelector('.menuCloseMobile').style.display = 'block'
}

function closeMenu() {
  document.querySelector('.menu').style.display = 'none'
}


function Header() {
  return (
    <div>
      <header className="header">

        <button className="menuOpenMobile" type="button" aria-label="Abrir Menu"
        onClick={openMenu}
        >

          <span className="menuIcon"></span>

        </button>

        <img src={Logo} alt="myte-bot" className="logo-myte-img"/>

        <nav className="menu">

        <button className="menuCloseMobile" type="button"
        aria-label="Fechar Menu"
        onClick={closeMenu}
        >

          <span className="menuCloseIcon">X</span>

        </button>


          <a className="menu-item" href="https://discord.gg/HrM9sC8pDX">
            Comunidade Myte
          </a>
          <a className="menu-item" href="/">
            Tutorial
          </a>
          <a className="menu-item" href="/">
            Contato
          </a>
          <a className="menu-item" href="/">
            Comandos
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
