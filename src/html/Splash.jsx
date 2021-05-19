import React from "react";
import "../css/splash.css";
import {type} from '../js/splash.js'

class Splash extends React.Component {
componentDidMount(){
    type();
}
  render() {
    return (
      <div className="splash-page">
        <section className="nav-bar">
          <div className="cd">
            <p className='text'>root@kali:~/home</p>
          </div>
        </section>
        <div className="container">
        <section className="terminal">
          <div className="terminal-text">
            <p></p>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default Splash;
