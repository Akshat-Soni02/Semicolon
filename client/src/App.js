import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import PostCard from "./Components/PostCard/PostCard.jsx";
import LoginSignUp from "./Components/LoginSignup/LoginSignup.jsx";
import Post from "./Pages/Post/PostPage.jsx";
import Store from "./Pages/Store/Store.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postCard" element={<PostCard />} />
          <Route path="auth" element={<LoginSignUp />} />
          <Route path="post" element={<Post />} />
          <Route path="store" element={<Store />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
