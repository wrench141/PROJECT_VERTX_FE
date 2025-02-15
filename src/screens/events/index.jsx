import FlowNav from "../../components/flowNavigation/component";
import "./style.css";
import logo from "../../assets/logo.png"

export default function Events() {
  return (
    <div className="events">
      <FlowNav />
      <div className="topbar">
        <div>
          <img src={logo} alt="" className="logo" />
          <p className="title">VERTX EVENTS</p>
        </div>
        <div className="btns">$5000 Credits</div>
      </div>
    </div>
  );
}
