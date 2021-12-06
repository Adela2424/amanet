import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Abaut from './pages/abaut';
import Contact from './pages/contact';
import Servicii from './pages/servicii';
import Produse from './pages/produse';
import Footer from './components/Footer';
import Cart from './components/Cart';




function App() {
  return (
    <>
   
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'   element={<Produse/>} />
        <Route path='/abaut'  element={<Abaut/>} />
        <Route path='/servicii'  element={<Servicii/>} />
        <Route path='contact'  element={<Contact/>} />
        <Route path='cart'  element={<Cart/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
