import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './components/Contact/Contact'
import About from './components/About_us/About'
import Category from './components/category/category'
import Signin from './components/Signin/Signin'

const App = () => {
    return (
        <div>

            <Header/>
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={ <About/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path='/signin' element={<Signin/>}/>
            </Routes>
            <Footer/>
            
        </div>
    )
}


export default App