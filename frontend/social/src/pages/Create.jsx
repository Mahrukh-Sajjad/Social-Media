import React from "react";
import "./Create.css";
import { useNavigate } from "react-router-dom";

const Create = ({ posts, setposts }) => {
  const obj1 = posts[0];
  console.log(obj1);
  const navigate = useNavigate();
  const postHandler = () => {
    navigate("/posts");
  };
  return (
    <div className="container1">
      {/* <img
        src={obj1.image}
        alt=""
        style={{
          marginTop: "5px",
          marginBottom: "30px",
          borderRadius: "10px",
          height: "350px",
        }}
      />
      <p style={{ marginBottom: "10px", fontWeight: "bold", fontSize: "25px" }}>
        Ai generated caption
      </p>
      <div className="caption" style={{ marginBottom: "10px" }}>
        <p>{obj1.caption}</p>
      </div>
      <button onClick={postHandler}>Post</button> */}
      {obj1 ? (
        <>
          <img
            src={obj1.image}
            alt=""
            style={{
              marginTop: "5px",
              marginBottom: "30px",
              borderRadius: "10px",
              height: "350px",
            }}
          />
          <p
            style={{
              marginBottom: "10px",
              fontWeight: "bold",
              fontSize: "25px",
            }}
          >
            Ai generated caption
          </p>
          <div className="caption" style={{ marginBottom: "10px" }}>
            <p>{obj1.caption}</p>
          </div>
          <button onClick={postHandler}>Post</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Create;
