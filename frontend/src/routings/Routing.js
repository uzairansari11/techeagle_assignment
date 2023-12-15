import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Products from "../component/Products";
import Orders from "../component/Orders";
import Login from "../pages/Login";
import Carts from "../component/Carts";
import NotFound from "../component/NotFound";
import { PrivateRoute } from "../hoc/PrivateRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route
          index
          element={
            <PrivateRoute>
              <Products />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="products"
          element={
            <PrivateRoute>
              <Products />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="orders"
          element={
            <PrivateRoute>
              <Orders />{" "}
            </PrivateRoute>
          }
        />
        <Route
          path="carts"
          element={
            <PrivateRoute>
              <Carts />{" "}
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound message={"Page Doesn't Exist"} />} />
    </Routes>
  );
};

export default Routing;
