import { createContext, useState } from "react";
import { DUMMY_PRODUCTS } from "../dummy-products";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItem: () => {},
  deleteCartItem: () => {},
});

export default function CartContextProvider({ children }) {
  const [shoppingcart, setShoppingCart] = useState({ items: [] });

  function handleAddItemToCart(id, selectedSize) {
    setShoppingCart((prevShoppingCart) => {
      const updatedCartItems = [...prevShoppingCart.items];

      const existingItemIndex = updatedCartItems.findIndex(
        (item) => item.id === id
      );

      const existingCartItem = updatedCartItems[existingItemIndex];

      if (existingCartItem && existingCartItem.size === selectedSize) {
        const updatedItem = {
          ...existingCartItem,
          qty: existingCartItem.qty + 1,
        };

        updatedCartItems[existingItemIndex] = updatedItem;
      } else {
        const newItem = DUMMY_PRODUCTS.find((product) => product.id === id);
        const length = updatedCartItems.length;
        updatedCartItems.push({
          ...newItem,
          qty: 1,
          size: selectedSize,
          cartItemId: `${id}${selectedSize}${length}`,
        });
      }

      return {
        items: updatedCartItems,
      };
    });
  }

  function handleUpdateCartItem(productId, amount) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.qty += amount;

      if (updatedItem.qty <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
      };
    });
  }

  function handleDeleteCartItem(prodCartItemId) {
    setShoppingCart((prevShoppingCart) => {
      const updatedItems = [...prevShoppingCart.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.cartItemId === prodCartItemId
      );

      updatedItems.splice(updatedItemIndex, 1);

      return {
        items: updatedItems,
      };
    });
  }
  const cartCtxValue = {
    items: shoppingcart.items,
    addItemToCart: handleAddItemToCart,
    updateCartItem: handleUpdateCartItem,
    deleteCartItem: handleDeleteCartItem,
  };
  return (
    <CartContext.Provider value={cartCtxValue}>{children}</CartContext.Provider>
  );
}
