import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/public/Home";
import Login from "./pages/auth/Login";
import Cart from "./pages/public/Cart";
import Register from "./pages/auth/Register";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./pages/admin/Dashboard";
import AddProduct from "./pages/admin/AddProduct";
import ProductList from "./pages/admin/ProductList";
import Missing from "./pages/public/Missing";
import ShopCategory from "./pages/public/ShopCategory";

import men_banner from "./assets/Frontend_Assets/banner_mens.png";
import women_banner from "./assets/Frontend_Assets/banner_women.png";
import kids_banner from "./assets/Frontend_Assets/banner_kids.png";
import ProductDetails from "./pages/public/ProductDetails";

const App = () => {
  console.log();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="men"
          element={<ShopCategory category="men" banner={men_banner} />}
        />
        <Route
          path="women"
          element={<ShopCategory category="women" banner={women_banner} />}
        />
        <Route
          path="kids"
          element={<ShopCategory category="kids" banner={kids_banner} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:productId" element={<ProductDetails />} />

        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="products" element={<ProductList />} />
        </Route>

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
