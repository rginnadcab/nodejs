import React from 'react'
import Header from './components/layout/Header/Header.js'
import Footer from './components/layout/Footer/Footer.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import LoginSignUp from "./component/User/LoginSignUp.js";


const App = () => {
  return (
    <Router>
       <Header />       
       <Routes >
          <Route path="/" element={<Home />} />        
          <Route path="/login" element={<LoginSignUp />} />
       </Routes >
       <Footer />
    </Router>
  )
}

export default App