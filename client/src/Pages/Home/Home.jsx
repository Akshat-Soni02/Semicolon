import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import CreatePostHome from '../../Components/createPostHome/CreatePostHome.jsx'

import "./style.css"
import Post from '../../Components/postPage/Post.jsx'
import Shop from "../../Components/shop/Shop.jsx"
import Footer from '../../Components/Footer/Footer.jsx'

const Home = () => {
  return (
    <section className='Home'>
        <div className="HomeNav">
            <Navbar/>
        </div>
        <div className="feed">
            <div className="homeFeed">
                <CreatePostHome/>
                <Post/>
            </div>
            <div className="homeRightFeed">
              <Shop/>
              <Footer/>
            </div>
        </div>
    </section>
  )
}

export default Home