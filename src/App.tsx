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
import ProductDetails from "./pages/public/ProductDetails";
import { useQuery } from "@tanstack/react-query";
import { authUser } from "./apis/auth.api";
import AdminRouter from "./components/commons/AdminRouter";
import PrivateRouter from "./components/commons/PrivateRouter";
import ProfileLayout from "./layout/ProfileLayout";
import Profile from "./pages/user/Profile";
import ChangePassword from "./pages/user/ChangePassword";
import { getAllBrands } from "./apis/brand.api";
import BrandList from "./pages/admin/BrandList";
import CategoryList from "./pages/admin/CategoryList";
import { getAllCategories } from "./apis/category.api";

const App = () => {
  useQuery({
    queryKey: ["authUser"],
    queryFn: () => authUser(),
  });
  useQuery({
    queryKey: ["brandList"],
    queryFn: () => getAllBrands(),
  });
  useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getAllCategories(),
  });

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product/:productId" element={<ProductDetails />} />

        <Route element={<PrivateRouter />}>
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="change-password" element={<ChangePassword />} />
          </Route>
        </Route>

        <Route element={<AdminRouter />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="products" element={<ProductList />} />
            <Route path="brands" element={<BrandList />} />
            <Route path="categories" element={<CategoryList />} />
          </Route>
        </Route>
      </Route>

      {/* CATCH ALL THOSE INVALID URL */}
      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
