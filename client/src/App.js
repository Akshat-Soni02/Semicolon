import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home.jsx";
// import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';;
import PostCard from "./Components/PostCard/PostCard.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postCard" element={<PostCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
