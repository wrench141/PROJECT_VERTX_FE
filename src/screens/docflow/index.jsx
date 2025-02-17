import "./style.css";
import FlowNav from "../../components/flowNavigation/component";
import logo from "../../assets/logo.png";
import axios from "axios";
import { useState } from "react";
export default function Docflow() {
  const [prompt, setPrompt] = useState("");
  const [msgs, setMsgs] = useState([]);

  const [resp, setResp] = useState();
  const [load, setLoad] = useState(false)


  const handlePromptPc = async () => {
    setLoad(true);
    const response = await axios
      .post("https://added-janka-feleka-de0cfd8c.koyeb.app/analyze-pitch", {
        pitch_text: prompt.replace(/\n/g, ""),
      })
      .catch((e) => e.response).finally(() => setLoad(false));
    setResp(response.data);
    console.log(response.data);
  };

  return (
    <div className="flow">
      <FlowNav />
      <div className="topbar">
        <div>
          <img src={logo} alt="" className="logo" />
          <p className="title">VERTX DOCFLOW <span className="tag">BETA</span></p>
        </div>
        <div className="btns">$5000 Credits</div>
      </div>
      <div className="chatsec mb">
        <p className="title">
          Hi, Chandra Sidhardha ✦ <br /> How would you like to have your pitch?{" "}
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
            <button className="send" onClick={() => handlePromptPc()}>
              {load ? <div className="load"></div> : "Prepare Pitch"}
            </button>
          </div>
        </div>
        {resp ? (
          <div className="output">
            <div className="row">
              <div className="back" onClick={() => setResp()}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <p className="btx">Back</p>
              </div>
              <div className="en">
                <ion-icon name="sparkles-outline"></ion-icon>
                <p className="btx">Enhance Pitch</p>
              </div>
            </div>
            {resp
              ? Object.keys(resp)?.map((key, i) => (
                  <div className="wrap" key={i}>
                    <p className="subtitle">
                      <span>✧</span> {key} :{" "}
                      {key == "Overall Score" ? resp[key] : null}
                      {key != "Overall Score" ? (
                        <ul className="list">
                          {Array.isArray(resp[key]) ? (
                            resp[key]?.map((item, i) => (
                              <li
                                className="item"
                                style={{ animationDelay: i * 0.1 + "s" }}
                              >
                                {item}
                              </li>
                            ))
                          ) : typeof resp[key] != "object" ? (
                            <li
                              className="item"
                              style={{ animationDelay: i * 0.1 + "s" }}
                            >
                              {resp[key]}
                            </li>
                          ) : (
                            Object.keys(resp[key])?.map((subkey) => (
                              <li
                                className="item"
                                style={{ animationDelay: i * 0.1 + "s" }}
                              >
                                {resp[key][subkey]}
                              </li>
                            ))
                          )}
                        </ul>
                      ) : (
                        <div className="level">
                          <div
                            className="bar"
                            style={{ width: resp["Overall Score"] + "%" || 0 }}
                          ></div>
                        </div>
                      )}
                    </p>
                  </div>
                ))
              : null}
          </div>
        ) : null}
      </div>

      {/* mobile */}
      <div className="chatspace">
        {resp ? (
          <div className="output">
            <div className="row">
              <div className="back" onClick={() => setResp()}>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <p className="btx">Back</p>
              </div>
              <div className="en">
                <ion-icon name="sparkles-outline"></ion-icon>
                <p className="btx">Enhance Pitch</p>
              </div>
            </div>
            {resp
              ? Object.keys(resp)?.map((key, i) => (
                  <div className="wrap" key={i}>
                    <p className="subtitle">
                      <span>✧</span> {key} :{" "}
                      {key == "Overall Score" ? resp[key] : null}
                      {key != "Overall Score" ? (
                        <ul className="list">
                          {Array.isArray(resp[key]) ? (
                            resp[key]?.map((item, i) => (
                              <li
                                className="item"
                                style={{ animationDelay: i * 0.1 + "s" }}
                              >
                                {item}
                              </li>
                            ))
                          ) : typeof resp[key] != "object" ? (
                            <li
                              className="item"
                              style={{ animationDelay: i * 0.1 + "s" }}
                            >
                              {resp[key]}
                            </li>
                          ) : (
                            Object.keys(resp[key])?.map((subkey) => (
                              <li
                                className="item"
                                style={{ animationDelay: i * 0.1 + "s" }}
                              >
                                {resp[key][subkey]}
                              </li>
                            ))
                          )}
                        </ul>
                      ) : (
                        <div className="level">
                          <div
                            className="bar"
                            style={{ width: resp["Overall Score"] + "%" || 0 }}
                          ></div>
                        </div>
                      )}
                    </p>
                  </div>
                ))
              : null}
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
          <button className="btn" onClick={() => {}}>
            <ion-icon name="attach-outline" style={{fontSize: 20}}></ion-icon>
          </button>
          <button className="btn" onClick={() => {handlePromptPc()}}>
            <ion-icon name="send"></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}
