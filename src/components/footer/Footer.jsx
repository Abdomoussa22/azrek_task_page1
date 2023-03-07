import React from 'react'
import './Footer.css'
import logo from "../../images/Group 2.png";
import { NavLink } from "react-router-dom";
const Footer = () => {
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
    <footer>
    <div className="wave-container d-flex  justify-content-around align-items-center">
      <div className="links">
        <div className="navigation">
          <div className="menu d-flex align-items-center gap-3">
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
      </div>
      <div className="image_text">
        <div className="image">
          <img src={logo} alt="logo" />
        </div>
        <p>
          نفخر بتقديم محتوى عربي تقني عالي الجودة وغير مدفوع بروح
          سعودية،يمكن من خلاله تعلم البرمجة في أهم المجالات التقنية
        </p>
      </div>
    </div>
    <p>
      2020 @<span> جميع الحقوق محفوظه ل</span> <span></span>
      <span className="ac_color">سطر</span>
    </p>
  </footer>
  )
}

export default Footer
