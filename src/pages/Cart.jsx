import classes from "./Cart.module.css";
import CartItem from "../components/CartItem";
import { CartContext } from "../store/shopping-cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items } = useContext(CartContext);

  const cartSubTotal = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  let shippingAmount = 19.99;
  let cartTotalAmount = 0;

  if (cartSubTotal > 150) {
    shippingAmount = 0;
  }
  if (items.length > 0) {
    cartTotalAmount = cartSubTotal + shippingAmount;
  }

  return (
    <div className={classes["cart-page-container"]}>
      <h1 className={classes.heading}>Shopping bag</h1>
      <div className={classes.container}>
        <section className={classes["cart-container"]}>
          {items.length === 0 && (
            <div className={classes["empty-cart"]}>
              <h2>Your shopping bag is empty</h2>
              <p>
                <Link to="/clothing">Shop Clothes</Link>
              </p>
            </div>
          )}
          {items.length > 0 && (
            <ul>
              {items.map((item, index) => (
                <li
                  key={`${item.title}${index}`}
                  className={classes["cart-list"]}
                >
                  <CartItem pKey={`${item.title}${index}`} product={item} />
                </li>
              ))}
            </ul>
          )}
        </section>
        <section className={classes["invoice-container"]}>
          <h2>Order Summary</h2>
          {items.length > 0 && (
            <div className={classes["invoice-subtotal-container"]}>
              <div className={classes["invoice-item"]}>
                <p>Subtotal</p>
                <p>
                  $ <span>{cartSubTotal.toFixed(2)}</span>
                </p>
              </div>
              <div className={classes["invoice-item"]}>
                <p>Estimated Shipping</p>
                {shippingAmount === 0 ? (
                  <p>Free</p>
                ) : (
                  <p>
                    $ <span>{shippingAmount.toFixed(2)}</span>
                  </p>
                )}
              </div>
            </div>
          )}
          <div className={classes["invoice-total"]}>
            <p>Estimated Total</p>
            <p>
              $ <span>{cartTotalAmount.toFixed(2)}</span>
            </p>
          </div>
          <div>
            <button className="primary">Checkout</button>
          </div>
        </section>
      </div>
    </div>
  );
}
