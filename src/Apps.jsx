import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import{Route,Routes} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
import Navbr from "./Navbr";
const Apps=()=>{
   return (
    <>
    <div className="content">
    <Navbr/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/service" element={<Service/>}/>

    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/service" element={<Service/>}/>
    </Routes>
    </div>
    </>
     ); 
};
export default Apps;