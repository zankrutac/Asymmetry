import classes from "./CategoriesSection.module.css";
import CategoryCard from "../components/CategoryCard";
import categoryClothingImg from "../assets/category-clothing.jpg";
import categoryFootwearImg from "../assets/category-footwear.jpg";
import categoryAccessoriesImg from "../assets/category-accessories.jpg";
import categoryFurnitureImg from "../assets/category-furniture.jpg";
import categoryHomeDecorImg from "../assets/category-home-decor.jpg";

const CATEGORIES = [
  {
    title: "clothing",
    image: categoryClothingImg,
  },
  {
    title: "footwear",
    image: categoryFootwearImg,
  },
  {
    title: "accessories",
    image: categoryAccessoriesImg,
  },
  {
    title: "furniture",
    image: categoryFurnitureImg,
  },
  {
    title: "home-decor",
    image: categoryHomeDecorImg,
  },
];

export default function CategoriesSection() {
  return (
    <section className={classes["categories-sec"]}>
      <h2>Shop by categories</h2>
      <div className={classes.sec}>
        <ul className={classes["category-list"]}>
          {CATEGORIES.map((category, index) => (
            <li key={index}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
