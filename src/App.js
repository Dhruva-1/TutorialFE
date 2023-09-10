import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import NseIndia1 from "./components/NseIndia";

function App() {
  return (
  <Router>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
  </Router>
    
  );
}

export default App;
