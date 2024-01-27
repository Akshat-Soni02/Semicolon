import React from "react";
import { IoImages } from "react-icons/io5";
import { FaPoll } from "react-icons/fa";
import Button from "@mui/material/Button";
import { BsPostcardHeartFill } from "react-icons/bs";

import "./Post.css";

export default function Post() {
  return (
    <main>
      <h3 className="header">Create a Post</h3>
      <div className="content">
        <div className="container borderBottom">
          <span className="borderRight ft-1">
            <BsPostcardHeartFill className="icons" />
            <span>Post</span>
          </span>
          <span className="borderRight ft-1">
            <IoImages className="icons" />
            <span>Media</span>
          </span>
          <span className="ft-1">
            <FaPoll className="icons" />
            <span>Post</span>
          </span>
        </div>

        <form className="form">
          <div className="title">
            <label>
              <input type="text" placeholder="Suggest a title for your post" />
            </label>
          </div>
          <div className="description ">
            <textarea
                name="postContent"
                placeholder="Write something"
                rows={4}
                cols={100}
           />
          </div>
          <div className="images-videos">
            <label>
              Media
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg, video/mp4"
              />
            </label>
          </div>
          <div>
            <Button className="btn" variant="contained">Post</Button>
          </div>
        </form>
      </div>
    </main>
  );
}
