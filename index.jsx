import React from "react";
import  ReactDOM from "react-dom";
import Component from "./Component.js";
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Signup from './log/Signup'
 ReactDOM.render(
 <BrowserRouter>
     <Header></Header>

     <Routes>
         <Route path='quizmaker/index.php/home' element={<Home />}/>
         <Route path='quizmaker/index.php/signup' element={<Signup />}/>
     </Routes>

 </BrowserRouter>
 , document.getElementById("root"));