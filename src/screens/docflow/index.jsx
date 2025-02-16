import "./style.css";
import FlowNav from "../../components/flowNavigation/component";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useState } from "react";

export default function Docflow(){
    const [prompt, setPrompt] = useState("");

    const handlePrompt = async() => {
        // const response = 
    }
    

    return (
      <div className="flow">
        <FlowNav />
        <div className="topbar">
          <div>
            <img src={logo} alt="" className="logo" />
            <p className="title">VERTX DOCFLOW</p>
          </div>
          <div className="btns">$5000 Credits</div>
        </div>
        <div className="chatsec">
          <p className="title">
            Hi, Chandra Sidhardha ✦ <br /> How would you like to have your
            pitch?{" "}
          </p>
          <p className="sub">Try to upload and enhance your pitching skills</p>
          <div className="hold">
            <textarea
              type="text"
              placeholder="Type i your Pitch or try to upload pitch ✦"
              className="prompt"
            />
            <div className="btns">
              <button className="upload">
                <ion-icon name="add-circle-outline"></ion-icon>
                Attach Document
              </button>
              <button className="send" onClick={() => handlePrompt()}>Prepare Pitch</button>
            </div>
          </div>
        </div>
      </div>
    );
}