import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
const App = () => {
    return (
        <div>
            <Header/>
            <Home/>
            <Footer/>
        </div>
    )
}

export default App