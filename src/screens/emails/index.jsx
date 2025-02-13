import "./style.css";
import Navigation from "../../components/navigation/component"
import logo from "../../assets/logo.png"

export default function GenerateEmail (){
    return (
      <div className="emailCont">
        <div className="topbar">
          <img src={logo} alt="" className="logo" />
          <p className="title">VERTX EMAILS</p>
        </div>
        <div className="sections">
          <div className="templates">
            <p className="ttitle">Select your template</p>

            {/* card start */}
            <div>
              <div className="type">BUSINESS</div>
              <div className="template">
                <p className="subject">
                  <span>Subject:</span> Seed-Stage AI Infrastructure Startup
                  with Strong
                </p>
                <div className="subject desc">
                  I hope this email finds you well. I wanted to reach out to
                  introduce you to TechStartup Inc., an AI infrastructure
                  company that I founded and lead as CEO...
                </div>
                <div className="filter">
                  <button className="sel">Use this Template</button>
                </div>
              </div>
            </div>
            {/* card end */}
            <div>
              <div className="type">PERSONAL</div>
              <div className="template">
                <p className="subject">
                  <span>Subject:</span> Exciting AI/ML Opportunity Aligned with
                  Your Focus Areas
                </p>
                <div className="subject desc">
                  I hope this email finds you well. I am John Doe, Founder and
                  CEO of TechStartup Inc., an innovative company specializing in
                  building next-gen AI infrastructure...
                </div>
                <div className="filter">
                  <button className="sel">Use this Template</button>
                </div>
              </div>
            </div>
            <div>
              <div className="type">METRICS</div>
              <div className="template">
                <p className="subject">
                  <span>Subject:</span> Exciting AI/ML Startup with Strong
                  Traction and 15% MoM Growth
                </p>
                <div className="subject desc">
                  I hope this email finds you well. I wanted to introduce you to
                  TechStartup Inc., an AI/ML company that's revolutionizing the
                  way businesses approach infrastructure...
                </div>
                <div className="filter">
                  <button className="sel">Use this Template</button>
                </div>
              </div>
            </div>
            <div>
              <div className="type">VISION</div>
              <div className="template">
                <p className="subject">
                  <span>Subject:</span> Pioneering the Future of AI
                  Infrastructure with TechStartup Inc.
                </p>
                <div className="subject desc">
                  I hope this email finds you well. I am John Doe, founder and
                  CEO of TechStartup Inc., a Seed-stage company specializing in
                  AI/ML infrastructure. Our mission is to revolutionize...
                </div>
                <div className="filter">
                  <button className="sel">Use this Template</button>
                </div>
              </div>
            </div>
          </div>
          <div className="cs">
            <div className="editor">
              <div className="enav">
                <p className="selTitle">Business</p>
                <button className="cls">
                  <ion-icon name="close-outline"></ion-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}