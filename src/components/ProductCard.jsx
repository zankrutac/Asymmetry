import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
export default function ProductCard({ product }) {
  return (
    <article className={classes["prod-container"]}>
      <Link to={product.id}>
        <img src={product.image[0]} alt={product.title} />
      </Link>
      <div>
        <Link to={product.id}>
          <h4>{product.title}</h4>
        </Link>
        <p>${product.price.toFixed(2)}</p>
      </div>
    </article>
  );
}
