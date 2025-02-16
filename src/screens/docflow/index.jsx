import "./style.css";
import FlowNav from "../../components/flowNavigation/component";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useState } from "react";

export default function Docflow(){
    const [prompt, setPrompt] = useState("");
    const [msgs, setMsgs] = useState([]);

    const handlePrompt = async() => {
        setMsgs([...msgs, {
          prompt,
          role: "user"
        }]);
        setPrompt("")
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
        <div className="chatsec mb">
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
              <button className="send" onClick={() => handlePrompt()}>
                Prepare Pitch
              </button>
            </div>
          </div>
        </div>
        <div className="chatspace">
          {msgs.length > 0 ? (
            <div className="msgs">
              {msgs?.map((msg, i) => (
                <div className="msg send" key={i}>
                  {msg.prompt}
                </div>
              ))}
            </div>
          ) : (
            <div className="dat">
              <p className="main">Hello Sidhardh!</p>
              <p className="mainsub">
                Welcome to DocFlow, enhance your pitch skills and unlock more
                opportunities
              </p>
            </div>
          )}
          <div className="float">
            <input
              type="text"
              placeholder="Give me your pitch, ill enhance it."
              className="inp"
              value={prompt}
              onChange={(e) => {
                setPrompt(e.target.value);
              }}
            />
            <button className="btn" onClick={() => handlePrompt()}>
              <ion-icon name="send"></ion-icon>
            </button>
            <button className="btn" onClick={() => handlePrompt()}>
              <ion-icon name="send"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    );
}



