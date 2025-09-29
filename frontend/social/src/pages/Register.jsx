import React from "react";
import "./Register.css";
import logo from "../assets/Pixora.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let navigate = useNavigate();

  let moveToLoginIn = () => {
    navigate("/");
  };

  const submitHandler = async (user) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        user,
        { withCredentials: true }
      );
      console.log("Registered", res);
      navigate("/");
    } catch (error) {
      console.log(error);
      console.error(
        "❌ Registration error:",
        error.response?.data || error.message
      );
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
              {...register("username", { required: "Email is required" })}
              placeholder="Enter username"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="password">
            <input
              type="password"
              {...register("password", { required: "password is required" })}
              placeholder="Enter password"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>
          <button>Sign up</button>
        </form>
        <div style={{ paddingTop: "15px" }}>
          <p>
            Already have an account!{" "}
            <span style={{ fontWeight: "bold" }} onClick={moveToLoginIn}>
              Sign In
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
