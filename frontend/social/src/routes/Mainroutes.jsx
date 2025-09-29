import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Create from "../pages/Create";
import Allpost from "../pages/Allpost";
import { useState } from "react";

const Mainroutes = () => {
  const [posts, setposts] = useState([]);
  const [user1, setuser1] = useState(null);
  return (
    <Routes>
      <Route path="/" element={<Login setuser1={setuser1} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/posts"
        element={<Allpost posts={posts} setposts={setposts} user1={user1} />}
      />
      <Route
        path="/create"
        element={<Create posts={posts} setposts={setposts} />}
      />
    </Routes>
  );
};

export default Mainroutes;
