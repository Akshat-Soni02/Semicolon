import "./App.css";
import { BrowserRouter, Link } from "react-router-dom";
import { Routes, Route } from "react-router";
import Home from "./Pages/Home/Home.jsx";
import PostCard from "./Components/PostCard/PostCard.jsx";
import LoginSignUp from "./Components/LoginSignup/LoginSignup.jsx";
import Post from "./Pages/Post/PostPage.jsx";
import Store from "./Pages/Store/Store.jsx";
import contPo from "./Pages/contentPolicy/contPo.jsx";
import Mod from "./Pages/ModeratorCodeOfConduct/Mod.jsx";
import PrivPol from "./Pages/privacyPolicy/PrivPol.jsx";
import UserAgg from "./Pages/UserAgreement/UserAgg.jsx";
import CommunityPage from "./Pages/Community/CommunityPage.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postCard" element={<PostCard />} />
          <Route path="/login" element={<LoginSignUp />} />
          <Route path="post" element={<Post />} />
          <Route path="store" element={<Store />} />
          <Route path="/stars/codeOfConduct" element={<Mod />} />
          <Route path="/ContentPolicy" element={<contPo />} />
          <Route path="/PrivacyPolicy" element={<PrivPol />} />
          <Route path="/UserAgreement" element={<UserAgg />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
