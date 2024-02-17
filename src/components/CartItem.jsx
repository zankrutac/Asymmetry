import classes from "./CartItem.module.css";
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function CartItem({ product, pKey }) {
  const cartCtx = useContext(CartContext);

  return (
    <article key={pKey} className={classes["cart-item-container"]}>
      <div className={classes["item-img-container"]}>
        {/* <Link to={product.id}> */}
        <img src={product.image[0]} className={classes["item-img"]} />
        {/* </Link> */}
      </div>
      <div className={classes["item-detail-container"]}>
        <div className={classes["item-details"]}>
          <div>
            <Link to={product.id}>
              <h3>{product.title}</h3>
            </Link>
            <p>Color: {product.color}</p>
            <p>Size: {product.size}</p>
          </div>
          <div>
            <button
              onClick={() => {
                cartCtx.deleteCartItem(product.cartItemId);
              }}
              className={classes["delete-button"]}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
        <div className={classes["item-price-container"]}>
          <div>
            <p>Each</p>
            <p>
              $<span>{product.price}</span>
            </p>
          </div>
          <div>
            <p>Quantity</p>
            <div className={classes["item-qty-container"]}>
              <button
                onClick={() => cartCtx.updateCartItem(product.id, -1)}
                className={classes["item-qty-btn"]}
              >
                -
              </button>
              <span className={classes["item-qty"]}>{product.qty}</span>
              <button
                onClick={() => cartCtx.updateCartItem(product.id, 1)}
                className={classes["item-qty-btn"]}
              >
                +
              </button>
            </div>
          </div>

          <div>
            <p>Total</p>
            <p>
              $<span>{product.price * product.qty}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
