import React from "react";
import "./Login.css";
import logo from "../assets/Pixora.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setuser1 }) => {
  const navigate = useNavigate();

  let moveToRegister = () => {
    navigate("/register");
  };

  const submitHandler = async (user) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/login",
        user,
        {
          withCredentials: true,
        }
      );
      console.log("user loged in successfully", res);
      console.log(res.data.user);
      setuser1(res.data.user);

      navigate("/posts");
    } catch (error) {
      console.error("❌ login error:", error.response?.data || error.message);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container">
      <div className="loginform">
        <img src={logo} alt="" style={{ height: "100px", width: "200px" }} />
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="email">
            <input
              type="text"
              {...register("username", { required: "username is required" })}
              placeholder="Enter your email"
            />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="password">
            <input
              type="password"
              {...register("password", { required: "password is required" })}
              placeholder="Enter password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button>Sign In</button>
        </form>
        <div style={{ paddingTop: "15px" }}>
          <p>
            Dont have an account!{" "}
            <span style={{ fontWeight: "bold" }} onClick={moveToRegister}>
              Sign up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
