import "./style.css";
import logo from "../../assets/logo.png";
import axios from "axios";
import API_KEY from "../../../key.js";
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router"
import { useEffect } from "react";

export default function Callback() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const code = params.get("code");

  const callback = async () => {
    const response = await axios
      .get(API_KEY + `/auth/callback?code=${code}`, {
      })
      .catch((e) => {
        return e.response;
      });
      console.log(response.data)
      if(response.status == 200){
        window.localStorage.setItem("token", response?.data?.token);
        // navigate("/outreach");
      }
  };
  
  useEffect(() => {
    console.log(code);
    if(code){
        callback();
    }
  }, [])

  return (
    <div className="auth-container">
      <div className="wrapper" style={{width: "40%"}}>
        <img src={logo} alt="" className="logo-sn" />
        <p className="title" style={{fontSize: "30px", marginBottom: "0px"}}>Hey Vertx user, We are launching soon.</p>
        <p className="sub">Thanks for pre-registering to our vertx application, we will notify soon</p>
      </div>
    </div>
  );
}
