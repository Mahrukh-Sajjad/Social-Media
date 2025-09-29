import React from "react";
import "./Displayposts.css";
import { FaUserCircle } from "react-icons/fa";

const Displayposts = ({ posts, user1 }) => {
  console.log(user1);
  return (
    <div className="feed">
      {posts.map((post, index) => (
        <div key={index} className="post-card">
          {/* Dummy username */}
          <div className="post-header">
            <div className="userid">
              <FaUserCircle size={25} />
            </div>
            <h4 className="username" style={{ fontSize: "15px" }}>
              {user1.username}
            </h4>
          </div>

          {/* Post image */}
          <div className="post-image">
            <img src={post.image} alt="post" />
          </div>

          {/* Caption */}
          <div className="post-caption">
            <p>{post.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Displayposts;
