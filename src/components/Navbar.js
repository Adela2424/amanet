import React, {useState}  from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";


function Navbar() {
    const [showLinks, setShowLinks]=useState(false);
    
    return (
        <>
           <div className="container_header" style={{ backgroundImage: "url('images/photo_header.png')" }}>
            <header className="header"> 
               <h4 className="header_mobile">  Telefon:0747846890 </h4>
            </header>
          </div>
          <nav className="container_nav">
             <div className="logo">
               <a href="/ ">   <img src="./images/logo_img.png" alt="" /> </a>
             </div>
             <div className="logo_mobile">
               <a href="/">  AmaNet </a> 
             </div>
             <div className="menu_nav" id={showLinks ? "hidden" : ""}>           
                <li> <a href="/"> Produse </a> </li>
                <li> <a href="servicii"> Servicii</a> </li>
                <li> <a href="abaut"> About </a> </li>
                <li> <a href="contact"> Contact </a> </li>
             </div>
             <div className="icons_mobile">
             <div className="mobile_search">
                <i className="fas fa-search "></i>
             </div>
             <div className="search_nav">
                 <input className="input"
                 type="text" placeholder="Search..."/>
                 <button className="button_search">Search</button>
             </div>
             <div className="icon_shopping">
              <Link to="/cart">  <i className="fas fa-shopping-cart "></i> </Link>
             </div>
             <div  onClick={()=> setShowLinks (!showLinks)} className="button_nav" >
                 <i  className="fas fa-bars btn_mobile  "></i>
             </div>    
             </div>
        </nav>
        </>
    )
}

export default Navbar;
