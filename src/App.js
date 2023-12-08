import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Error from './pages/Error';
import Home from './pages/Home';
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
    <Router>
      <Header />

      <Routes>
           <Route path="/" element={<Home/>} /> 
           <Route path="/categories" element={<Categories/>} /> 
           <Route path="/products" element={<Products/>} /> 
           <Route path="/sales" element={<Sales/>} /> 
           <Route path="/cart" element={<Cart/>} /> 
           <Route path="*" element={<Error/>} />
          
      </Routes>
      
      <Footer />

    </Router>
    
      
    </>
  );
}

export default App;
