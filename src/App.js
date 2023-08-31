
import './App.css';
import Header from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

import CartProvider from './Components/Store/CartProvider'
import Routers from './Components/Routers/Router';
import Footer from './Components/Layout/Footer';



function App() {
  return (
    <Router>
      <CartProvider>
      <Header></Header>
      <Routers></Routers>
      <Footer></Footer>
     </CartProvider>
    </Router>
  );
}

export default App;
