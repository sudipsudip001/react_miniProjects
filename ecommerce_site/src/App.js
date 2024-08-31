import React from 'react'
import Promo from "./components/Promo.js";
import Navbar from "./components/Navbar.js";
import About from './components/About.js';
import Items from './components/Items.js';
import New from './components/New.js';
import Subscription from './components/Subscription.js';
import Best from './components/Best.js';
import Footer from './components/Footer.js';
// import './App.css';

function App() {
  return (
    <>
        <Promo />
        <Navbar />
        <About />
        <Items />
        <New />
        <Subscription />
        <Best />
        <Footer />
    </>
  )
}

export default App