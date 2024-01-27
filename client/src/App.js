import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import PostCard from "./Components/PostCard/PostCard.jsx";
import LoginSignUp from "./Components/LoginSignup/LoginSignup.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postCard" element={<PostCard />} />
          <Route path="auth" element={<LoginSignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
