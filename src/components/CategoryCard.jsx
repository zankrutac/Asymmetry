import { Link } from "react-router-dom";
import classes from "./CategoryCard.module.css";

export default function CategoryCard({ category }) {
  return (
    <article className={classes["category-card-container"]}>
      <Link to={category.title} className={classes["category-img-container"]}>
        <img src={category.image} alt={category.title} />
      </Link>
      <Link to={category.title}>
        <h3 className={classes["category-title"]}>{category.title}</h3>
      </Link>
    </article>
  );
}
