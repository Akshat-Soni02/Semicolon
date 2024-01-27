import React from 'react'
import Navbar from '../../Components/Navbar/Navbar.jsx'
import CreatePostHome from '../../Components/createPostHome/CreatePostHome.jsx'

import "./style.css"
import Post from '../../Components/post/Post.jsx'

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
            </div>
        </div>
    </section>
  )
}

export default Home