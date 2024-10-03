// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './compnent/About';
import Navbar from './compnent/Navbar';
import TextForm from './compnent/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const[mode, setMode]=useState('light');

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'

    }

  }
  return (
 <> 
   <Navbar title ="Al-Aziz" az="About" mode={mode} toggleMode={toggleMode} />
   {/* <About /> */}
  {/* <Router>
 
   <div className="container">
   <Routes>
          <Route exact path="/about" element={ }>  
          </Route>
       
        
   </Routes>
     </div>
  </Router> */}
  <div>
  <TextForm hed="Enter Text You want to analyze" mode={mode} />
  </div>

      
 </>
 
  );
}

export default App;
