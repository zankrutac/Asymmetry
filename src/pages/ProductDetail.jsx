import classes from "./ProductDetail.module.css";
import { DUMMY_PRODUCTS } from "../dummy-products";
import { Link, useParams } from "react-router-dom";
import { useState, useContext } from "react";
import { CartContext } from "../store/shopping-cart-context";
import { CATEGORY_SIZES } from "../all-data";

export default function ProductDetailPage() {
  const params = useParams();
  const cartCtx = useContext(CartContext);
  // let selectedSize;
  const [isSizeSelected, setIsSizeSelected] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const [product] = DUMMY_PRODUCTS.filter((prod) => {
    return prod.id === params.productId;
  });
  const [displayImg, setDisplayImg] = useState(product.image[0]);

  function handleShowProductImg(index) {
    setDisplayImg(product.image[index]);
  }

  function handleSelectSize(productSize) {
    setIsSizeSelected((prevState) => !prevState);
    setSelectedSize(productSize);
    setShowWarning(false);

    // selectedSize = productSize;
  }

  function handleAddToCart() {
    if (product.category !== "furniture" && product.category !== "home-decor") {
      if (!isSizeSelected) {
        setShowWarning(true);
      }

      if (isSizeSelected) {
        cartCtx.addItemToCart(product.id, selectedSize);
        setShowWarning(false);
      }
      setIsSizeSelected(false);
      setSelectedSize("");
      // selectedSize = "";
    } else {
      cartCtx.addItemToCart(product.id);
    }
  }
  return (
    <div>
      <div className={classes.container}>
        <div className={classes["img-gallery"]}>
          {product.image.map((img, index) => (
            <button
              key={index}
              onClick={() => {
                handleShowProductImg(index);
              }}
            >
              <img src={img} alt={`title ${index}`} />
            </button>
          ))}
        </div>
        <div className={classes["prod-img"]}>
          <img src={displayImg} alt={product.title} />
        </div>
        <div className={classes["prod-details"]}>
          <div>
            <h1>{product.title}</h1>
            <p>$ {product.price}</p>
          </div>
          {/* {product.colors && (
            <div>
              <p>Available Colors</p>
              <div className={classes["available-colors"]}>
                {product.colors.map((color) => (
                  <button key={color.name}>{color.name}</button>
                ))}
              </div>
            </div>
          )} */}

          {CATEGORY_SIZES[product.category] && (
            <div className={classes["prod-size-container"]}>
              <p>Sizes</p>
              {showWarning && (
                <p className={classes.warning}>! Please select a size</p>
              )}
              <div className={classes["prod-sizes"]}>
                {CATEGORY_SIZES[product.category]?.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSelectSize(size)}
                    className={
                      isSizeSelected && selectedSize === size
                        ? classes.selected
                        : undefined
                    }
                  >
                    {size}
                  </button>
                ))}
              </div>
              <Link>See Size Chart</Link>
            </div>
          )}

          <button onClick={handleAddToCart} className="primary">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
}
