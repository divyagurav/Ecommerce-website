import React from "react";




import { Route, Routes } from "react-router-dom";
import About from "../Layout/About.js";
import Tours from "../Layout/Home.js";
import Productlist from "../Product/productlist.js";
import { RoutePath } from "./Const.js";

const Routers = () => {
  return (
    <div>
      <Routes>
      <Route path={RoutePath.Home} element={<Tours></Tours>} />
        <Route path={RoutePath.Home} element={<Productlist></Productlist>} />
        <Route path={RoutePath.Store} element={<Productlist />} />
        <Route path={RoutePath.About} element={<About></About>} />
      </Routes>
    </div>
  );
};

export default Routers;