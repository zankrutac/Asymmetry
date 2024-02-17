import ProductCard from "../components/ProductCard";
import ProductPageLayout from "../UI/ProductPageLayout";
import classes from "./Furniture.module.css";
import { DUMMY_PRODUCTS } from "../dummy-products";

export default function FurniturePage() {
  return (
    <ProductPageLayout>
      <h1>Clothing Collection</h1>
      <ul className={classes["product-list"]}>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </ProductPageLayout>
  );
}
