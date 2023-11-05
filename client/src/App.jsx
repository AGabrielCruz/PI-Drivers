/* eslint-disable */

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import {Routes , Route, useLocation} from "react-router-dom"

import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Form from "./views/Form/Form";
import Detail from "./views/Detail/Detail";
import NavBar from './components/navbar/NavBar';

function App() {

  const location = useLocation(); 

  return (
    <div>  
          {location.pathname !== "/" && <NavBar/>}

        <Routes>

          <Route path = "/" element= {<Landing/>}/>
          <Route path = "/home"  element={<Home/>}/>
          <Route path = "/form" element ={<Form/>}/>
          <Route path = "/detail" element = {<Detail/>}/>


        </Routes> 

    </div>
  )
}

export default App;
