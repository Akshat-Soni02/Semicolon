import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Post from "./Components/Post/Post.jsx"
import Home from './Pages/Home/Home.jsx';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
