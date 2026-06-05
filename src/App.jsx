import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import ErrorPage from "./pages/ErrorPage";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import React from "react";
import FiturXyz from "./pages/FiturXyz";
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))

export default function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 p-4">
        <Header />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
           <Route path="/FiturXyz" element={<FiturXyz />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route
            path="/error400"
            element={
              <ErrorPage
                code="400"
                description="Bad Request"
                image="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
              />
            }
          />

          <Route
            path="/error401"
            element={
              <ErrorPage
                code="401"
                description="Unauthorized Access"
                image="https://cdn-icons-png.flaticon.com/512/564/564619.png"
              />
            }
          />

          <Route
            path="/error403"
            element={
              <ErrorPage
                code="403"
                description="Forbidden Access"
                image="https://cdn-icons-png.flaticon.com/512/595/595067.png"
              />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}