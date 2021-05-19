import React from "react";
import "../css/splash.css";
import {type} from '../js/splash.js'
import warning from '../assets/warning.svg'

class Splash extends React.Component {
componentDidMount(){
    type();
}
  render() {
    return (
      <div className="splash-page">
        <section className="nav-bar">
          <div className="cd">
            <p className='text'>root@kali: ~/home</p>
            <p className="cursor">|</p>
          </div>
        </section>
        <div className="container">
        <section className="terminal">
          <div className="terminal-text">
            <p></p>
          </div>
          <div className="warning">
            <img src={warning} alt="warning" className='alert'/>
          </div>
          <div className="target-info">
            <p className='person'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, ratione! Ipsa
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi quod et possimus, earum dolor optio laboriosam? Nihil adipisci voluptatem similique suscipit saepe dicta modi distinctio, doloremque in temporibus libero!
            </p>
          </div>
        </section>
      </div>
      </div>
    );
  }
}

export default Splash;
