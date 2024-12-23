import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from "../assets/icon.png"

const Navbar = () => {
  const navigation = [
    { title: "Anasayfa", path: "/" },
    { title: "Yapay Zeka Çözümleri", path: "/YapayZeka" },
    { title: "Dijital Dönüşüm Çözümleri", path: "/DijitalDonusum" },
    { 
      title: "Özel Yazılım Çözümleri", 
      subpages: [
        { title: "Mobil Yazılım", path: "/MobilUygulama" },
        { title: "UI & UX", path: "/Ui&Ux" },
        { title: "Web Tasarım", path: "/WebTasarim" },
        { title: "Web Yazılım", path: "/WebYazilim" },
        { title: "DRM", path: "/Drm" },
      ],
    },
 
    { title: "İletişim", path: "/Iletisim" },
    { title: "Teklif Al", path: "/Teklif" },
  ];

  const [show, setShow] = useState(false);
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-xl navbar-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="analogo" width={100} />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setShow(!show)} 
          aria-controls="navbarNav" 
          aria-expanded={show} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navigation.map((item) => (
              <li className={`nav-item ${item.subpages ? "dropdown" : ""}`} key={item.title}>
                {!item.subpages ? (
                  <NavLink 
                    className={`nav-link ${
                      item.title === "Teklif Al"
                        ? "teklif-nav btn px-3 py-2 fw-bolder"
                        : "nav-text text-secondary fw-bolder fs-5 "
                    } ${
                      location.pathname === item.path 
                        ? "active text-decoration-underline " 
                        : ""
                    }`} 
                    to={item.path}
                    onClick={() => setShow(false)}
                  >
                    {item.title}
                  </NavLink>
                ) : (
                  <>
                    <button 
                      className="nav-link dropdown-toggle nav-text text-secondary fw-bolder fs-5" 
                      id="navbarDropdown" 
                      role="button" 
                      data-bs-toggle="dropdown" 
                      aria-expanded="false"
                    >
                      {item.title}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {item.subpages.map((subitem) => (
                        <li key={subitem.title}>
                          <NavLink 
                            className={`dropdown-item ${
                              location.pathname === subitem.path 
                                ? "active text-decoration-underline text-danger-emphasis" 
                                : ""
                            }`} 
                            to={subitem.path}
                            onClick={() => setShow(false)}
                          >
                            {subitem.title}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div> 
    </nav>
  );
}

export default Navbar;








