import React from "react";
import "./Allpost.css";
import { FaPlus } from "react-icons/fa";
import { useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Displayposts from "../components/Displayposts";

const Allpost = ({ posts, setposts, user1 }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    inputRef.current.click();
  };
  const moveToLogin = () => {
    navigate("/");
  };
  useEffect(() => {
    console.log("Logged in user:", user1);
  }, [user1]);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post(
        "http://localhost:3000/api/posts", // backend route
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("✅ Post created:", res.data);
      const postObject = res.data.post;
      setposts((prevPosts) => [postObject, ...prevPosts]);
      navigate("/create");
    } catch (err) {
      console.error("❌ Upload error:", err.response?.data || err.message);
    }
  };

  const display = <Displayposts posts={posts} user1={user1} />;

  return (
    <div className="main">
      <div className="createPost">
        <div className="adding">
          <div
            className="add"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="file"
              ref={inputRef}
              onChange={handleFileChange}
              style={{ display: "none" }}
            />
            <button
              style={{
                background: "none",
                border: "none",
              }}
              onClick={handleButtonClick}
            >
              <FaPlus size={15} color="black" />
            </button>
          </div>
          <div className="para">
            <p style={{ fontWeight: "bold" }}>Create Post</p>
            <p style={{ fontSize: "15px", color: "black", opacity: "0.6" }}>
              Share a photo and generate caption through ai
            </p>
          </div>
        </div>
        <div className="btn">
          <button onClick={moveToLogin}>Login</button>
        </div>
      </div>

      <div className="showPosts">{display}</div>
    </div>
  );
};

export default Allpost;
