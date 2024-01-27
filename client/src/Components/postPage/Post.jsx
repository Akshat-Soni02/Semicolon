import React from 'react'
import img from "../../assets/test.png"
import { VscComment } from "react-icons/vsc";
import { BsDot } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./style.css"
import { useState } from 'react';

const Post = () => {
    const [isLiked, setisLiked] = useState(false);
    const [isDisliked, setisDisliked] = useState(false);
    const navigate = useNavigate();


    const likePost = () => {
        setisLiked(!isLiked);
    }

    const DislikePost = () => {
        setisDisliked(!isDisliked);
    }

    // const navToCommunity = () => {
    //     navigate(`/community/${communityName}`);
    // }

    // const navTOUser = () => {
    //     navigate(`/user/${userName}`);
    // }

    // const navToPostDetails = () => {
    //     navigate(`/post/${postName}`);
    // }

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
        <div className="postFunctions" >
            <div className="postLike" onClick={likePost}>
                {isLiked ? (<BiSolidLike/>) : (<BiLike/>)}
            </div>
            <div className="postDislike" onClick={DislikePost}>
                {isDisliked ? (<BiSolidDislike/>) : (<BiDislike/>)}
            </div>
            <VscComment className='postDislike'/>
        </div>
    </div>
  )
}

export default Post