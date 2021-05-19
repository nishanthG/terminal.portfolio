import React from "react";
import "../css/splash.css";
import { type } from "../js/splash.js";
import warning from "../assets/warning.svg";

class Splash extends React.Component {
  componentDidMount() {
    type();
  }
  render() {
    return (
      <div className="splash-page">
        <section className="nav-bar">
          <div className="cd">
            <p className="text">root@kali: ~/home</p>
            <p className="cursor">|</p>
          </div>
        </section>
        <div className="container">
          <section className="terminal">
            <div className="terminal-text">
              <p></p>
            </div>
            <div className="warning">
              <img src={warning} alt="warning" className="alert" />
            </div>
            <div className="info">
              <p className="text">connecting into IPv4 Address: 192.168.67.246 <br/>
              subnet mask: 255.255.255.0</p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Splash;
