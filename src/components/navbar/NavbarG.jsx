import React, { useRef } from "react";
import logo from "../../images/Group 2.png";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./Navbar.css";
const NavbarG = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const nav__links = [
    {
      display: "التحديات",
      path: "/cha",
    },
    {
      display: "المشاريع التطبيقية",
      path: "/projects",
    },
    {
      display: "الدورات",
      path: "/corses",
    },
    {
      display: "المسارات",
      path: "/dir",
    },
    {
      display: "الرئيسية",
      path: "/",
    },
  ];
  return (
    <nav>
      <Container className="con m-auto">
        <div className="loginNow">
          <button className="btn ">سجل الآن</button>
        </div>
        {/* ======= menu ======= */}
        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
          <div className="menu d-flex align-items-center gap-5">
            {nav__links.map((item, index) => (
              <NavLink
              id="link"
                to={item.path}
                key={index}
                className={(navClass) =>
                  navClass.isActive ? "active__menu" : "" 
                }
              >
                {item.display}
              </NavLink>
            ))}
          </div>
        </div>
          <span className="mobile__menu" onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>
            </span>
        <div className="logo">
          <img src={logo} alt="logo" className="imgLogo" />
        </div>
      </Container>
    </nav>
  );
};

export default NavbarG;
