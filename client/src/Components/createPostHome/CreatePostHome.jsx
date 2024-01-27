import React from 'react'
import logo from "../../assets/logo-no-background1.png";
import "./style.css";
import { useState } from "react";


import { CiImageOn } from "react-icons/ci";
import { FaLink } from "react-icons/fa6";

const CreatePostHome = () => {
    // const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
    const [postInput, setPostInput] = useState("");

  return (
    <div className='crtPost'>
        <div className="postCreate">
            <img src={logo} alt="Semicolon" width={346} height={303} className='logo_img_sb_post'/>
            <label className="postLabel" htmlFor='postInput'>Create Post</label>
            <input className="createPostInput" type='text' id='postInput' size = "50"  value={postInput} onChange={(e) => setPostInput(e.target.value)} placeholder="Create Post"/>
            <CiImageOn className = "homeIcons"/>
            <FaLink className = "homeIcons"/>
        </div>
    </div>
  )
}

export default CreatePostHome