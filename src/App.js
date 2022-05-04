import React from 'react';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar.jsx";
import AppMain from "./Components/AppMain.jsx";
import AppAbout from "./Components/AppAbout.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<AppMain />}/>
          <Route path='/about' element={<AppAbout />} />
        </Routes>

    </BrowserRouter>


  );
}

// <div className="App">
//       <h1> 'APP' </h1>
//       <KeySelector/>
//       <ButtonGrabAPI/>
//       <Synth/>

//     </div>
export default App;
