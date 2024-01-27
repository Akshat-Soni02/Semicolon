import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Post from "./Components/Post/Post.jsx";
import PostCard from "./Components/PostCard/PostCard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="post" element={<Post />} />
        <Route path="/postCard" element={<PostCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
