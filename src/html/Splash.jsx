import React from "react";
import "../css/splash.css";
import { run } from "../js/gsap.js";
import warning from "../assets/warning.svg";

class Splash extends React.Component {
  componentDidMount() {
    run();
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
              <span className="one-line">
                <p className="txt-1 root">kali@linux:~/Desktop/hack/$</p>
                <p className="txt-2"></p>
              </span>
              <span className="one-line">
                <p className="txt-3 root"></p>
                <p className="txt-4"></p>
              </span>
              <span className="one-line">
                <p className="txt-5 root"></p>
                <p className="txt-6"></p>
              </span>
              <span className="one-line">
                <p className="txt-7 msg"></p>
              </span>
              <span className="one-line">
                <p className="txt-8 root"></p>
                <p className="txt-9"></p>
              </span>
              <span className="one-line">
                <p className="txt-10 root"></p>
                <p className="txt-11"></p>
              </span>
            </div>
            <div className="warning">
              <img src={warning} alt="warning" className="alert" />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Splash;
