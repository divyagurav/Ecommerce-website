import "./App.css";
import Header from "./Components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

import CartProvider from "./Components/Store/CartProvider";
import Routers from "./Components/Routers/Router";
import Footer from "./Components/Layout/Footer";
import { AuthContextProvider } from "./Components/Store/auth-context";

function App() {
  return (
    <Router>
      <CartProvider>
        <AuthContextProvider>
          <Header></Header>
          <Routers></Routers>
          <Footer></Footer>
        </AuthContextProvider>
      </CartProvider>
    </Router>
  );
}

export default App;
