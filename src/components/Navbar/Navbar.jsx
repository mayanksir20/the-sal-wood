import React, { useEffect, useState } from "react";
import { fetchMenu } from "../../Services/api";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState([]);
  const [activeItem, setActiveItem] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // mobile ke liye

  useEffect(() => {
    fetchMenu().then((data) => {
      setMenu(data);
    });

    // Set initial active item based on current URL hash
    if (window.location.hash) {
      setActiveItem(window.location.hash);
    }

    // Handle resize to detect mobile view
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    // Handle hash change for single page applications
    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveItem(window.location.hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleItemClick = (link) => {
    setActiveItem(link);
    // For mobile, close the menu after clicking (if no submenu)
    if (isMobile) {
      const toggler = document.querySelector(".navbar-toggler");
      if (toggler && getComputedStyle(toggler).display !== "none") {
        const collapse = document.getElementById("navbarNav");
        if (collapse.classList.contains("show")) {
          toggler.click();
        }
      }
    }
  };

  const toggleDropdown = (id) => {
    if (openDropdown === id) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(id);
    }
  };

  return (
    <nav className="navbar p-0 navbar-expand-lg navbar-light navbar-blur fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <a
          className="navbar-brand"
          href="#home"
          onClick={() => handleItemClick("#home")}
        >
          <img
            src="/src/assets/Images/the-sal-wood-logo.png"
            alt="The Sal Wood"
            className="logo"
          />
        </a>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto gap-2">
            {menu.map((item) => (
              <li
                key={item.id}
                className={`nav-item ${item.submenu ? "dropdown" : ""}`}
              >
                <a
                  className={`nav-link ${
                    activeItem === item.link ? "active" : ""
                  }`}
                  href={item.link}
                  onClick={(e) => {
                    if (isMobile && item.submenu) {
                      e.preventDefault();
                      toggleDropdown(item.id);
                    } else {
                      handleItemClick(item.link);
                    }
                  }}
                >
                  {item.name}
                  {item.submenu && (
                    <span className="dropdown-toggle ms-1" style={{ fontSize: "0.8em" }}></span>
                  )}
                </a>

                {/* Dropdown */}
                {item.submenu && (
                  <ul
                    className={`dropdown-menu ${
                      isMobile
                        ? openDropdown === item.id
                          ? "show"
                          : ""
                        : ""
                    }`}
                  >
                    {item.submenu.map((sub) => (
                      <li key={sub.id}>
                        <a
                          className={`dropdown-item ${
                            activeItem === sub.link ? "active" : ""
                          }`}
                          href={sub.link}
                          onClick={() => handleItemClick(sub.link)}
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="#reservation"
            className="btn btn-reserve ms-lg-3"
            onClick={() => handleItemClick("#reservation")}
          >
            Reservation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
