import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Navbar() {
  const [show, handleShow] = useState(false);
  const [open, setOpen] = useState(false);
  const onScroll = () => {
    if (window.scrollY > 0) {
      handleShow(true);
    } else handleShow(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <>
      <header className="md:container">
        <nav className={`${show ? "navbar_scroll" : ""} w-full`}>
          <div className="navbar_logo-container">
            <div className="logo_container">
              Inicio
            </div>

            <div className="desktop_flags flex gap-3">
            </div>
          </div>

          <div className="hidden hamburger_menu-container px-24">
            <FontAwesomeIcon
              icon={faBars}
              className="hamburger_menu"
              onClick={() => setOpen(!open)}
            />
          </div>

          <div className={`${open ? "block" : "hidden"} navbar_list-container`}>
            <ul className="flex w-full navbar_list">
              <li>
                <Link
                  activeClass="navbar_active"
                  spy
                  to="navbar"
                  onClick={() => setOpen(!open)}
                >
                  <span>sobre mi</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar_active"
                  spy
                  to="about"
                  onClick={() => setOpen(!open)}
                >
                  <span>galeria</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar_active"
                  spy
                  to="portfolio"
                  onClick={() => setOpen(!open)}
                >
                  <span>trabajos</span>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="navbar_active"
                  spy
                  to="services"
                  onClick={() => setOpen(!open)}
                >
                  <span>contacto</span>
                </Link>
              </li>

              {/* <div className="hidden mobile_flags flex gap-3 mb-3">
                                    <img src={spain} alt="Bandera de España" onClick={() => i18n.changeLanguage("es")} />
                                    <img src={usa} alt="Bandera de Estados Unidos" onClick={() => i18n.changeLanguage("en")} />
                                </div> */}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
