import { NavLink, Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { CartContext } from "../store/shopping-cart-context";
import { useContext, useState } from "react";
export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartCtx = useContext(CartContext);
  const cartItemsQty = cartCtx.items.reduce((sum, item) => sum + item.qty, 0);

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => {
      return !prevState;
    });
  }

  function handleCloseMobileMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={classes["nav-header"]}>
      <button className={classes["menu-button"]} onClick={handleToggleMenu}>
        {isMenuOpen ? (
          <i className="fa-solid fa-xmark fa-lg"></i>
        ) : (
          <i className="fa-solid fa-bars fa-lg"></i>
        )}
      </button>

      <Link to="/">
        <h1 className={classes.logo}>ASYMMETRY</h1>
      </Link>

      <nav>
        <ul
          className={`${classes["nav-menu"]} ${
            isMenuOpen ? classes.open : undefined
          }`}
        >
          <li>
            <NavLink
              to="/clothing"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
              onClick={handleCloseMobileMenu}
            >
              CLOTHING
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/footwear"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              FOOTWEAR
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              ACCESSORIES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/furniture"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              FURNITURE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/home-decor"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              onClick={handleCloseMobileMenu}
            >
              HOME DECOR
            </NavLink>
          </li>
        </ul>
      </nav>

      <Link to="/cart" className={classes.cart}>
        <i className="fa-solid fa-bag-shopping fa-lg"></i>
        <span className={classes["cart-items"]}>{cartItemsQty}</span>
      </Link>
    </header>
  );
}
