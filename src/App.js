import React from "react";
import './App.css';
import Header from './Components/Header';
import Leftbar from "./Components/Leftbar";
import Footer from "./Components/Footer";
import Content from "./Components/Content";



function App() {


  return (
    <div className="App">
       
      <Header />
      <Leftbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
