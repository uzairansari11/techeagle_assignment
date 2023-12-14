import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../component/Products";
import Orders from "../component/Orders";
import Login from "../pages/Login";
import { Carts } from "../component/Carts";
import NotFound from "../component/NotFound";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        {/* Main Content */}
        <Route index element={<Products />} /> {/* Default to Products */}
        <Route path="products" element={<Products />} />
        <Route path="orders" element={<Orders />} />
        <Route path="carts" element={<Carts />} />
      </Route>
      <Route path="*" element={<NotFound message={"Page Doesn't Exist"}/>} />
    </Routes>
  );
};

export default Routing;
