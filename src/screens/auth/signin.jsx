import "./style.css";
import logo from "../../assets/logo.png";
import axios from "axios";
import API_KEY from "../../../key.js";
import { useState } from "react";

import Input from "../../components/input/component";
import Button from "../../components/button/component";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const [resp, setResp] = useState("");
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(false);

  const signinHandler = async () => {
    setLoad(true)
    const response = await axios
      .post(API_KEY + "/auth/signin", {
        email,
        password,
      })
      .catch((e) => {
        return e.response;
      });

    if(response){
        setLoad(false);
        console.log(response?.data?.msg);
        setResp(response?.data?.msg);
        if (response.status == 200) {
          window.localStorage.setItem("token", response?.data?.token);
        }
        setShow(true);
    }
  };

  return (
    <div className="auth-container">
      <div className="wrapper">
        <img src={logo} alt="" className="logo-sn" />
        <p className="title">Sign in with Vertex</p>
        <Input
          state={email}
          setState={setEmail}
          label={"Enter your email"}
          theme={"dark"}
        />
        <Input
          state={password}
          setState={setPass}
          label={"Set a strong password"}
          theme={"dark"}
        />
        <div className="btnWrap">
          <Button
            theme={"light"}
            context={
                load ? <div className="loader"></div> : "Log In"
            }
            callback={() => signinHandler()}
          />
          <Button
            theme={"dark"}
            context={"Forget password"}
            callback={() => {}}
          />
        </div>
        <a href="/signup" className="subhead">
          Don't have an account? <span>Sign up</span>
        </a>
        {
            show ? (
                <div className="notification">{resp}</div>
            ) : null
        }
      </div>
    </div>
  );
}
