import "./style.css";
import logo from "../../assets/logo.png";
import Button from "../../components/button/component";
import {useNavigate} from "react-router"
import Navigation from "../../components/navigation/component";
import InvestorCard from "../../components/investorCard/component";
import { useEffect, useState } from "react";
import {companyStages, industries, sectors, currentTraction, previousFunding, requiredFunding} from "./filters.js"
import API_KEY from "../../../key";
import axios from "axios"


function Card({data}){
  const [show, setShow] = useState(false);
  const hide = () => {setShow(false)}
  console.log(data)
  return (
    <div className="pcard" onClick={() => setShow(true)}>
      {show ? <InvestorCard id={"1234"} cb={hide} data={data} /> : null}
      <div className="img">
        <p className="midTit">{data?.company}</p>
      </div>
      <div className="row">
        <div className="pdetails">
          <p className="ctit">{data?.firstName + " " + data?.lastName}</p>
          <p className="subtit">Solo angel</p>
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
    const [resp, setResp] = useState();

      const getInvestors = async () => {
        const resp = await axios.get(API_KEY + "/investors/", {headers: {token: window.localStorage.getItem("token")}}).catch(e => e.response);
        console.log(resp.data)
        setResp(resp.data?.slice(0, 5))
      };

      useEffect(() => {
        getInvestors()
      },[])
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
            {!window.localStorage.getItem("token")? (
              <Button
                context={"Login"}
                theme={"dark"}
                callback={() => {
                  navigate("/authentication");
                }}
              />
            ) : null}
          </div>
        </div>
        <div className="bottom">
          <div className="navwrap mb" style={{ height: "calc(100vh - 70px)" }}>
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
                <option value="Traction" className="opt" disabled selected>
                  Traction
                </option>
                {currentTraction.map((stage, i) => (
                  <option key={i} value={stage} className="opt">
                    {stage}
                  </option>
                ))}
              </select>
              <select className="sel">
                {companyStages.map((stage, i) => (
                  <option key={i} value={stage} className="opt">
                    {stage}
                  </option>
                ))}
              </select>
              <select className="sel">
                <option value="Sector" className="opt" disabled selected>
                  Sector
                </option>
                {sectors.map((stage, i) => (
                  <option key={i} value={stage} className="opt">
                    {stage}
                  </option>
                ))}
              </select>
              <select className="sel">
                <option value="Industries" className="opt" disabled selected>
                  Industries
                </option>
                {industries.map((stage, i) => (
                  <option key={i} value={stage} className="opt">
                    {stage}
                  </option>
                ))}
              </select>
            </div>
            <div className="profilecards">
              {resp?.map((item) => item.company != "null-val" ? (
                <Card data={item} />
              ):null)}
            </div>
          </div>
        </div>
      </div>
    );
}