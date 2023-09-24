import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import About from './components/About_us/About'
import Category from './components/category/category'
import Signin from './components/Signin/Signin'
import Luxury from './components/Luxury/Luxury'
import SUV from './components/SUV/SUV'
import Sport from './components/Sport/Sport'
import Register from './components/Register/register';
import React, { useState } from 'react';
import {data} from './api/api'
import Carts from './pages/Carts'

const App = () => {
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    const [example, setExample]= useState();
    
    
    const addToCart = (product) => {
        setCart([...cart, product]);
      };

    const clearCart = () =>{
        setCart([])
    }
    return (

        <div>
      
           
            <Header/>
          
            <Routes>
            <Route path="/" element={<Home products={products} addToCart={addToCart}/>}/>
            <Route path='/Sport' element={<Sport/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/SUV' element={<SUV/>}/>
            <Route path="/Luxury" element={<Luxury/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={ <About/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/cart' element={<Carts cart={cart} clearCart={clearCart}/>}/>
            </Routes>


            <Footer/>
            
        </div>
    )
}


export default App