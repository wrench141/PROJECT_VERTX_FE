import "./style.css";
import logo from "../../assets/logo.png";
import Button from "../../components/button/component";
import {useNavigate} from "react-router"
import Navigation from "../../components/navigation/component";

export default function Outreach(){
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
          <div className="msection">
            <p className="head">Vertx AI Weekly Newsletter</p>
          </div>
        </div>
      </div>
    );
}