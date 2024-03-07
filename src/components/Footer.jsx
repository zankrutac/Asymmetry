import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes["footer-container"]}>
      <div className={classes["socials-container"]}>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-x-twitter"></i>
        <i className="fa-brands fa-pinterest"></i>
      </div>
      <ul className={classes["footer-links"]}>
        <li>
          <ul className={classes["footer-sublinks"]}>
            <li className={classes["footer-sublink-heading"]}>About us</li>

            <li>
              <Link to="">Our Story</Link>
            </li>
            <li>
              <Link to="">Careers</Link>
            </li>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Investors</Link>
            </li>
            <li>
              <Link to="">Affiliate program</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className={classes["footer-sublinks"]}>
            <li className={classes["footer-sublink-heading"]}>Customer care</li>

            <li>
              <Link to="">Help Center</Link>
            </li>
            <li>
              <Link to="">Return/Exchange Policy</Link>
            </li>
            <li>
              <Link to="">Shipping Policy</Link>
            </li>
            <li>
              <Link to="">FAQs</Link>
            </li>
            <li>
              <Link to="">Size charts</Link>
            </li>
          </ul>
        </li>
        <li>
          <ul className={classes["footer-sublinks"]}>
            <li className={classes["footer-sublink-heading"]}>Contact us</li>
            <li>
              <Link>Chat with us</Link>
            </li>
            <li>
              <Link>Email us</Link>
            </li>
            <li>
              <Link>1-222-333-4444</Link>
            </li>
          </ul>
        </li>
      </ul>

      <ul className={classes["footer-terms"]}>
        <li>
          <Link to="">Terms of service</Link>
        </li>
        <li>
          <Link to="">Privacy policy</Link>
        </li>
        <li>Asymmetry &copy;</li>
      </ul>
    </footer>
  );
}
