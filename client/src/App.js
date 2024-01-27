import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from './Pages/Home/Home.jsx';
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import contPo from "./Pages/contentPolicy/contPo.jsx"
import Mod from "./Pages/ModeratorCodeOfConduct/Mod.jsx"
import PrivPol from "./Pages/privacyPolicy/PrivPol.jsx"
import UserAgg from "./Pages/UserAgreement/UserAgg.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/stars/codeOfConduct' element = {<Mod/>} />
          <Route path='/ContentPolicy' element = {<contPo/>} />
          <Route path='/PrivacyPolicy' element = {<PrivPol/>} />
          <Route path='/UserAgreement' element = {<UserAgg/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
