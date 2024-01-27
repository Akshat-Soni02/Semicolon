import React from 'react'
import img from "../../assets/test.png"
import { BsLightning } from "react-icons/bs";
import { BsLightningFill } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";

import "./style.css"
import { useState } from 'react';

const Post = () => {
    const [isLiked, setisLiked] = useState(false);

    const likePost = () => {
        setisLiked(!isLiked);
    }

  return (
    <div className='post'>
        <div className="postInfo">
            <div className="postInfoCom">
                <img className='userAva' src={img} alt=''/>
                <span className="postCommunity">fakeCommunity</span>
            </div>
            <span className="postUser">
                <BsDot/> 
                Posted by fake_man
            </span>
        </div>
        <div className="postContent">
            <span className="postTitle">
                This is a Fake Post Title
            </span>
            <div className="postImgDiv">
                <img className='postImg' src={img} alt=''/>
            </div>
            <p className="postText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium totam magni sit id obcaecati minus ut reprehenderit odio quaerat, optio aperiam illo, veritatis dolorum voluptatibus nesciunt commodi maiores, dolor magnam.
            </p>
        </div>
        <div className="postFunctions" onClick={likePost}>
            {isLiked ? (<BsLightningFill/>) : (<BsLightning/>)}
            <VscComment/>
        </div>
    </div>
  )
}

export default Post