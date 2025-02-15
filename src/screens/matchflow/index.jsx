import "./style.css";
import logo from "../../assets/logo.png";
import FlowNav from "../../components/flowNavigation/component";
import Button from "../../components/button/component";
import { useState } from "react";
import Input from "../../components/input/component";

function Step1({ cb }) {
  return (
    <div className="st">
      <p className="title">Founder profile details</p>
      <p className="sub">
        Sync your profile to auto-fill business details. Complete any missing
        fields manually.
      </p>
      <div className="wrap pr15">
        <Button context={"Sync Data"} theme={"light"} callback={() => cb()} />
      </div>
    </div>
  );
}

function Step2({ cb, back }) {
  const [countries, setCount] = useState([]);
  const [traction, setTraction] = useState("");
  const [reqFunding, setReq] = useState("");
  const [prevFunding, setPrev] = useState("");

  return (
    <div className="st sc2">
      <div className="meta">
        <div>
          <p className="title">Founder profile details</p>
          <p className="sub">Complete missing fields manually.</p>
          <div className="wrap btns" style={{ width: "50%" }}>
            <Button context={"Back"} theme={"dark"} callback={() => back()} />
          </div>
        </div>
      </div>
      <div className="inpWrap">
        <div className="wrap">
          <label className="lab">Basic Details</label>
          <div className="basicDetails"></div>
        </div>
        <div className="wrap">
          <label className="lab">
            Choose your target countries to secure your investment
          </label>
          <select className="sel">
            <option value="Select country..." className="opt" disabled>
              Select Country
            </option>
          </select>
        </div>
        <div className="wrap">
          <label className="lab">Current traction</label>
          <Input
            theme={"dark2"}
            label={"Pre production Launch"}
            state={traction}
            setState={setTraction}
          />
        </div>
        <div className="wrap">
          <label className="lab">Required funding</label>
          <Input
            theme={"dark2"}
            label={"<$100K"}
            state={reqFunding}
            setState={setReq}
          />
        </div>
        <div className="wrap">
          <label className="lab">Previous funding</label>
          <Input
            theme={"dark2"}
            label={"Angel Investment"}
            state={prevFunding}
            setState={setPrev}
          />
        </div>
        <div className="wrap btns">
          <Button context={"Proceed"} theme={"light"} callback={() => cb()} />
        </div>
      </div>
    </div>
  );
}

function Step3() {
  const [count, setCount] = useState(0)
  return (
    <div className="feleka">
      <div className="sections">
        <div className="data">
          <p className="title">Mark your preferred investors</p>
          <p className="sub">
            Prioritize those who see potential in you. Rank and select investors
            for targeted email outreach.
          </p>
        </div>
        <div className="valcont">
          <p className="subtitle">Investors Matched</p>
          <p className="count">✦ {count}</p>
        </div>
      </div>
      <div className="table">
        <div className="row headr">
          <p className="head">Name</p>
          <p className="head">Thesis</p>
          <p className="head">Entry Stage</p>
          <p className="head">Check Range</p>
          <p className="head">Match Score</p>
          <p className="head"></p>
        </div>
        <div className="row">
          <td className="data">
            <p className="tit">Trind Ventures</p>
            <p className="sub">VC Firm</p>
          </td>
          <td className="data">
            We invest in European software startups with a consumer or community
            component, such as marketplaces and platforms.
          </td>
          <td className="data">Early Revenew</td>
          <td className="data">$100K - $1M</td>
          <td className="data">
            <div className="tag ok">90%</div>
          </td>
          <td className="data">
            <input
              type="checkbox"
              className="check"
              onChange={(e) => {
                if (e.target.checked) {
                  setCount(count + 1);
                } else {
                  if (count <= 0) {
                    setCount(0);
                  } else {
                    setCount(count - 1);
                  }
                }
              }}
            />
          </td>
        </div>
        <div className="row">
          <td className="data">
            <p className="tit">Trind Ventures</p>
            <p className="sub">VC Firm</p>
          </td>
          <td className="data">
            We invest in European software startups with a consumer or community
            component, such as marketplaces and platforms.
          </td>
          <td className="data">Early Revenew</td>
          <td className="data">$100K - $1M</td>
          <td className="data">
            <div className="tag warn">80%</div>
          </td>
          <td className="data">
            <input
              type="checkbox"
              className="check"
              onChange={(e) => {
                if (e.target.checked) {
                  setCount(count + 1);
                } else {
                  if (count <= 0) {
                    setCount(0);
                  } else {
                    setCount(count - 1);
                  }
                }
              }}
            />
          </td>
        </div>
        <div className="row">
          <td className="data">
            <p className="tit">Trind Ventures</p>
            <p className="sub">VC Firm</p>
          </td>
          <td className="data">
            We invest in European software startups with a consumer or community
            component, such as marketplaces and platforms.
          </td>
          <td className="data">Early Revenew</td>
          <td className="data">$100K - $1M</td>
          <td className="data">
            <div className="tag del">70%</div>
          </td>
          <td className="data">
            <input
              type="checkbox"
              className="check"
              onChange={(e) => {
                if (e.target.checked) {
                  setCount(count + 1);
                } else {
                  if (count <= 0) {
                    setCount(0);
                  } else {
                    setCount(count - 1);
                  }
                }
              }}
            />
          </td>
        </div>
      </div>
      <div className="btnwrap">
        <div className="btnl">
          <Button context={"Next"} theme={"light"} callback={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default function Matchflow() {
  const [step, setStep] = useState(0);
  return (
    <div className="mt">
      <FlowNav />
      <div className="topbar">
        <div>
          <img src={logo} alt="" className="logo" />
          <p className="title">VERTX MATCH FLOW</p>
        </div>
        <div className="btns">$5000 Credits</div>
      </div>
      <div className="section">
        {step == 0 ? (
          <Step1 cb={() => setStep(1)} />
        ) : step == 1 ? (
          <Step2 cb={() => setStep(2)} back={() => setStep(0)} />
        ) : (
          <Step3 back={() => setStep(1)} />
        )}
      </div>
    </div>
  );
}
