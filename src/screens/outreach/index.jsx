import "./style.css";
import logo from "../../assets/logo.png";
import Button from "../../components/button/component";
import {useNavigate} from "react-router"
import Navigation from "../../components/navigation/component";
import InvestorCard from "../../components/investorCard/component";
import { useState } from "react";


function Card({data}){
  const [show, setShow] = useState(false);
  return (
    <div className="pcard" onClick={() => setShow(true)}>
      {show ? <InvestorCard id={"1234"} setShow={setShow} /> : null}
      <div className="img">
        <p className="midTit">First Momentum VC</p>
      </div>
      <div className="row">
        <div className="pdetails">
          <p className="ctit">First Momentum VC</p>
          <p className="subtit">VC Moment</p>
        </div>
        <div className="btnwrap">
          <button className="tag">Mark</button>
          <button className="tag">View Profile</button>
        </div>
      </div>
    </div>
  );
}

export default function Outreach(){
    const navigate = useNavigate();
    const [openNav, setNav] = useState(false);

    return (
      <div className="container-ot">
        <div className="topbar">
          <div className="wrap">
            <img src={logo} alt="logo" className="logo" />
            <p className="title">Vertx AI</p>
          </div>
          <ion-icon
            className="menu"
            name="menu-outline"
            color={"white"}
            style={{ fontSize: "25px" }}
            onClick={() => setNav(true)}
          ></ion-icon>
          <div className="btwrap mb">
            <Button context={"Login"} theme={"dark"} callback={() => {}} />
          </div>
        </div>
        <div className="bottom">
          <div
            className="navwrap mb"
            style={{ height: "calc(100vh - 70px)" }}
          >
            <Navigation cb={() => setNav(false)} />
          </div>
          <div
            className={openNav ? "navwrap mbv open" : "navwrap mbv"}
            style={{ height: "calc(100vh - 70px)" }}
          >
            <Navigation cb={() => setNav(false)} />
          </div>
          <div className="msection">
            <p className="head">React out top Investors.</p>
            <p className="subhead msec">
              Get connection with investors of your choice.
            </p>
            <div className="filter">
              <select className="sel">
                <option value="Type" className="opt" disabled selected>
                  Type
                </option>
              </select>
              <select className="sel">
                <option value="Stage" className="opt" disabled selected>
                  Stage
                </option>
              </select>
              <select className="sel">
                <option value="Sector" className="opt" disabled selected>
                  Sector
                </option>
              </select>
              <select className="sel">
                <option value="Size" className="opt" disabled selected>
                  Size
                </option>
              </select>
              <select className="sel">
                <option value="Geography" className="opt" disabled selected>
                  Geography
                </option>
              </select>
            </div>
            <div className="profilecards">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
}