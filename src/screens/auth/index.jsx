import "./style.css";
import logo from "../../assets/logo.png";
import axios from "axios";
import API_KEY from "../../../key.js";
import {useState} from "react";
import { useNavigate } from "react-router";
import Input from "../../components/input/component";
import Button from "../../components/button/component";

export default function Signup(){
    const navigate = useNavigate();
    const [username, setUname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("");

    const [resp, setResp] = useState("");
    const [show, setShow] = useState(false);
    const [load, setLoad] = useState(false);
    
    const signupHandler = async () => {
      setLoad(true);
      const response = await axios
        .post(API_KEY + "/auth/signup", {
          name: username, 
          email,
          password,
        })
        .catch((e) => {
          return e.response;
        });

      if (response) {
        setLoad(false);
        console.log(response?.data?.msg);
        setResp(response?.data?.msg);
        if(response.status == 200){
          window.localStorage.setItem("token", response?.data?.token)
          navigate("/info")
        }
        setShow(true);
      }
    };

    return (
      <div className="auth-container">
        <div className="wrapper">
          <img src={logo} alt="" className="logo-sn" />
          <p className="title">Sign up with Vertex</p>
          <Input
            state={username}
            setState={setUname}
            label={"Enter username"}
            theme={"dark"}
          />
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
              context={load ? <div className="loader"></div> : "Create Account"}
              callback={() => signupHandler()}
            />
            <Button
              theme={"dark"}
              context={"Forget password"}
              callback={() => {}}
            />
          </div>
          <a href="/signin" className="subhead">
            Already having an account? <span>Sign In</span>{" "}
          </a>
          {show ? <div className="notification">{resp}</div> : null}
        </div>
      </div>
    );
}