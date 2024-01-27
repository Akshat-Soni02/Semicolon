import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Home from './Pages/Home/Home.jsx';
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home/>} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
