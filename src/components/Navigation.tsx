import "../styles/navigation.css";
import React from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  function toggleMenu() {
    setIsOpen((prevIsOpen) => !prevIsOpen);

    if (!isOpen) {
        document.body.style.overflow = "hidden"; // Disable scrolling
      } else {
        document.body.style.overflow = ""; // Enable scrolling
      }
  }



  return (
    <main className="navigation-main">
      <section className="navigation-section">
        <div className="navigation-container">
          <img src="./public/icons/captivateLogo.svg" alt="captivate logo" />

          <div className={`navigation-list ${isOpen ? "active" : ""}`}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
          </div>

          <div className={`small-navigation-list ${isOpen ? "active" : ""}`}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
            <div className="small-navigation-actions">
              <a href="#">Log in</a>
              <hr />
              <button>Get Started</button>
            </div>
          </div>

          <div className={`navigation-actions ${isOpen ? "active" : ""}`}>
            <a href="">Log in</a>
            <button>Get Started</button>
          </div>

          <button
            className={`menu-toggle ${isOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </section>
    </main>
  );
}
