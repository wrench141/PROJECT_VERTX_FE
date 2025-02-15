import "./style.css";
import logo from "../../assets/logo.png";
import Button from "../../components/button/component";
import {useNavigate} from "react-router"
import Navigation from "../../components/navigation/component";
import { useState } from "react";

export default function Explore(){
    const navigate = useNavigate();
    const [openNav, setNav] = useState(false);

    return (
      <div className="container-ot-exp">
        <div className="topbar">
          <div className="wrap">
            <img src={logo} alt="logo" className="logo" />
            <p className="title">Vertx AI</p>
          </div>
          <ion-icon className="menu" name="menu-outline" color={"white"} style={{fontSize: "25px"}} onClick={() => setNav(true)}></ion-icon>
          <div className="btwrap mb">
            <Button context={"Login"} theme={"dark"} callback={() => {}} />
          </div>
        </div>
        <div className="bottom" style={{ height: "100%" }}>
          {openNav ? (
            <Navigation cb={() => setNav(false)} />
          ): null}
          <div className="esection">
            <div className="anim">
              <p className="head">✴ Find your Co Founder ✴</p>
              <p className="sub">
                Match with the right co-founder tailored to your unique business
                requirements through the Vertx platform
              </p>
              <div className="inpwrapper">
                <input
                  type="text"
                  placeholder="Search for Co Founders ✦"
                  className="search"
                />
                <button className="cam">
                  <ion-icon name="send-outline"></ion-icon>
                </button>
              </div>
            </div>
            <div className="cards">
              <p
                className="head"
                style={{ textAlign: "left", marginBottom: "10px" }}
              >
                News Articles
              </p>
              <div className="card">
                <div className="banner">
                  <p className="ntit">Vertx AI</p>
                </div>
                <div className="news-details">
                  <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="banner">
                  <p className="ntit">Publications</p>
                </div>
                <div className="news-details">
                  <p className="description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Doloribus
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}