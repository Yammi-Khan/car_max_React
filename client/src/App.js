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

const App = () => {
 
    
    return (

        <div>
      
           
            <Header/>
          
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path='/Sport' element={<Sport/>}/>
            <Route path='/Register' element={<Register/>}/>
            <Route path='/SUV' element={<SUV/>}/>
            <Route path="/Luxury" element={<Luxury/>}/>
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