import { Link, Route,Routes } from "react-router-dom";
import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from "./Components/Product";
import AddProduct from "./Components/AddProduct";

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="products/:product_id" element={<Product/>}/>
    <Route path="/add" element={<AddProduct/>}/>
</Routes>
    </>
  )
}

export default App
