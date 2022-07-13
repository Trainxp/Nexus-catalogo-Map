import React from "react";
import "./Navbar.css"
import  Nexuslogo from "./img/Nexus logo.png"
import "../CartWitget/CartWitget"
import CartWitget from "../CartWitget/CartWitget";


const Navbar = () => {
    return <div className="NavBar" >
            <img className="logo" src={Nexuslogo} alt="logo" ></img>
         <ul className="Ulnav" >
            <li className="linav" >CELULARES</li>
            <li className="linav">CONTACTO</li>
            <li className="linav">NOSOTROS</li>
            <CartWitget/>
        </ul>
         </div>
}

export default Navbar;