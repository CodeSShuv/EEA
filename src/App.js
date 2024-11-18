// App.js
import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import ProductPage from './Component/ProductPage';
import Footer from './Component/Footer';
// import Section from './Component/Section';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <ProductPage />
    
      <Footer/>
    </div>
  );
};





export default App;