import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import CategoryProductsPage from "./pages/CategoryProducts";
import ProductDetailPage from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import CartContextProvider from "./store/shopping-cart-context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":categoryId",
        element: <CategoryProductsPage />,
      },
      {
        path: ":categoryId/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
function App() {
  return (
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  );
}

export default App;
