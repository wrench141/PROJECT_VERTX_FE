import "./style.css";
import logo from "../../assets/logo.png";
import Button from "../../components/button/component";
import {useNavigate} from "react-router"
import Navigation from "../../components/navigation/component";

export default function Explore(){
    const navigate = useNavigate();
    return (
      <div className="container ot">
        <div className="topbar">
          <div className="wrap">
            <img src={logo} alt="logo" className="logo" />
            <p className="title">Vertx AI</p>
          </div>
          <div className="btwrap">
            <Button context={"Login"} theme={"dark"} callback={() => {}} />
          </div>
        </div>
        <div className="bottom">
          <Navigation />
          <div className="esection">
            <div className="anim">
              <p className="head">✴ Find your Investor ✴</p>
              <p className="sub">
                Match with the right investor tailored to your unique business
                requirements through the Vertx platform
              </p>
              <input
                type="text"
                placeholder="Search for Investors ✦"
                className="search"
              />
            </div>
          </div>
        </div>
      </div>
    );
}