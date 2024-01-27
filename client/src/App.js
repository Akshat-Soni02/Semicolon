import './App.css';
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from 'react-router';
import Post from "./Components/Post/Post.jsx"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="post" element={<Post />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
