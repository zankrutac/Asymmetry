import { DUMMY_PRODUCTS } from "../dummy-products";
import ProductCard from "../components/ProductCard";
import classes from "./CategoryProducts.module.css";
import { useParams } from "react-router-dom";

export default function CategoryProductsPage() {
  const params = useParams();
  const categoryId = params.categoryId;
  return (
    <section className={classes["page-container"]}>
      <h1 className={classes["page-title"]}>{categoryId} Collection</h1>
      {/* <div className={classes.filter}>
        <div>Sort by</div>
        <div>All Filters</div>
      </div> */}
      <ul className={classes["product-list-container"]}>
        {DUMMY_PRODUCTS.filter((prod) => {
          return prod.category === categoryId;
        }).map((product) => (
          <li key={product.id} className={classes["product-list"]}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
