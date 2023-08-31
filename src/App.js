import React from "react";
import "./App.css";
import AvailableProduct from "./Components/AvailableProduct";
import Header from "./Components/Header";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <AvailableProduct />
    </React.Fragment>
  );
}

export default App;
