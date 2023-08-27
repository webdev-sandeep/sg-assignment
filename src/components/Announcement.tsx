import truckIcon from "../assets/icons/truck.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";
import instagramIcon from "../assets/icons/instagram.svg";

const Announcement = () => {
  return (
    <div id="announcement-bar">
      <div className="flex items-center">
        <div className="delivery flex px-2">
          <span>
            <img src={truckIcon} alt="shipping-icon" />
          </span>
          <span>Free delivery</span>
        </div>
        <span className="px-2">Return Policy</span>
      </div>
      <ul className="social flex">
        <li>Login</li>
        <li id="follow">Follow US</li>
        <li>
          <a href="#">
            <img src={facebookIcon} alt="facebook-icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={linkedinIcon} alt="linkedin-icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitterIcon} alt="twitter-icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagramIcon} alt="instagram-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Announcement;
