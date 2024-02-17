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

            <Link to="">
              <li>Our Story</li>
            </Link>
            <Link to="">
              <li>Careers</li>
            </Link>
            <Link to="">
              <li>Blog</li>
            </Link>
            <Link to="">
              <li>Investors</li>
            </Link>
            <Link to="">
              <li>Affiliate program</li>
            </Link>
          </ul>
        </li>
        <li>
          <ul className={classes["footer-sublinks"]}>
            <li className={classes["footer-sublink-heading"]}>Customer care</li>

            <Link to="">
              <li>Help Center</li>
            </Link>
            <Link to="">
              <li>Return/Exchange Policy</li>
            </Link>
            <Link to="">
              <li>Shipping Policy</li>
            </Link>
            <Link to="">
              <li>FAQs</li>
            </Link>
            <Link to="">
              <li>Size charts</li>
            </Link>
          </ul>
        </li>
        <li>
          <ul className={classes["footer-sublinks"]}>
            <li className={classes["footer-sublink-heading"]}>Contact us</li>
            <Link>
              <li>Chat with us</li>
            </Link>
            <Link>
              <li>Email us</li>
            </Link>
            <Link>
              <li>1-222-333-4444</li>
            </Link>
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
