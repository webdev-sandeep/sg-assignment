import { useState } from "react";

import starIcon from "../assets/icons/star.svg";
import linkIcon from "../assets/icons/link.svg";
import hamBurger from "../assets/icons/hamburger.svg";
import cross from "../assets/icons/cross.svg";

import star from "../assets/images/star.png";
import model from "../assets/images/model.png";

const Hero = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  return (
    <section id="hero">
      <header className="nav-wrapper">
        <div className="navbar">
          <div className="brand">Shopkart</div>

          <div
            className="toggler"
            onClick={() => setShowOffCanvas(!showOffCanvas)}
          >
            {showOffCanvas ? (
              <img src={cross} alt="hamburger-icon" className="cross" />
            ) : (
              <img src={hamBurger} alt="hamburger-icon" />
            )}
          </div>

          <div className="menu-item">
            <p>Wishlist (0)</p>
            <p>Bag (0)</p>
          </div>
        </div>
        <ul className="nav-items">
          <li className="nav-link">
            <span>Home</span>
          </li>
          <li className="nav-link">
            <span>About</span>
          </li>
          <li className="nav-link dropdown">
            <span> Our Products</span>
            <ul className="drop-menu">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
              <li>Product 4</li>
            </ul>
          </li>
          <li className="nav-link">
            <span>Contact Us</span>
          </li>
        </ul>

        {/* Off canvas this will be shown on click -- by deafault it is hidden ; you can manipulate "hide" class */}
        <section className={`off-canvas ${showOffCanvas ? "" : "hide"}`}>
          <div className="offcanvas-bg">
            <div className="navbar pt-10">
              <div className="brand">Shopkart</div>
              <div
                className="toggler"
                onClick={() => setShowOffCanvas(!showOffCanvas)}
              >
                {showOffCanvas ? (
                  <img src={cross} alt="hamburger-icon" className="cross" />
                ) : (
                  <img src={hamBurger} alt="hamburger-icon" />
                )}
              </div>
            </div>
            <ul className="offcanvas-nav-items">
              <li>Home</li>
              <li>About</li>
              <li>Our Products</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
      </header>
      <div id="hero-image-wrapper">
        <div className="orange-box box-1"></div>
        <div className="star">
          <img src={star} alt="star-image" className="img-fluid" />
        </div>
        <div className="model-image">
          <img src={model} alt="model-image" className="h-full" />
        </div>
        <div className="orange-box box-2"></div>
        <div className="hero-details">
          <p>OREGON JACKET</p>
          <p>$124</p>
        </div>
      </div>

      <div className="hero-text-wrapper">
        <h1 className="fresh">Fresh</h1>
        <h1 className="year">2022</h1>
        <h1 className="look">Look</h1>
      </div>

      <div className="hero-star-wrapper">
        <div className="hero-star-line"></div>
        <div className="hero-star">
          <img src={starIcon} alt="star-icon" />
        </div>
      </div>
      <div className="see-more">
        See more
        <span>
          <img src={linkIcon} alt="link" />
        </span>
      </div>
    </section>
  );
};

export default Hero;
