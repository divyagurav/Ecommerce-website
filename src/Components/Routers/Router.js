import React from "react";

import About from "../Layout/About";

import { Route, Routes } from "react-router-dom";
import { RoutePath } from "./Const.js";
import Tours from "../Layout/Home";
import CantactUs from "../Layout/CantactUs";
import Productlist from "../Product/productlist";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path={RoutePath.Home} element={<Tours></Tours>} />
        <Route path={RoutePath.Store} element={<Productlist></Productlist>} />
        <Route path={RoutePath.About} element={<About />} />
        <Route path={RoutePath.CantactUs} element={<CantactUs></CantactUs>} />
      </Routes>
    </div>
  );
};

export default Routers;
