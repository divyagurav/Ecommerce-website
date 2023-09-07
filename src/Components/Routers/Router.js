import React, { useContext } from "react";

import Productlist from "../Product/productlist";
import About from "../Layout/About";
import ContactUs from "../Layout/CantactUs";
import { Route, Routes, Navigate } from "react-router-dom";
import { RoutePath } from "./Const.js";
import Tours from "../Layout/Home";
import ProductPage from "../Product/ProductPage";
import AuthForm from "../Auth/AuthForm";
import AuthContext from "../Store/auth-context";

const Routers = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home} element={<Tours></Tours>} />
        <Route path={RoutePath.Default} element={<Tours></Tours>} />
        <Route
          path={RoutePath.Store}
          element={
            isLoggedIn ? <Productlist /> : <Navigate to={RoutePath.Login} />
          }
        />
        <Route path={RoutePath.ProductPage} element={<ProductPage />} />
        <Route path={RoutePath.About} element={<About />} />
        <Route path={RoutePath.Login} element={<AuthForm />} />
        <Route path={RoutePath.CantactUs} element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default Routers;
