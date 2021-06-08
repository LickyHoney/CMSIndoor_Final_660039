import React, { Component } from "react";
import { Link } from "react-router-dom";
import DashBoard from "../dashboard/Dashboard";
//import HomePage from "../dashboard/HomePage";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="centered">
           {/* <Link to="/Map1" className="btn btn-primary" class="ri-home-4-line" style={{fontSize: '20px', color: 'white', paddingBottom: '50px'}}> Home </Link> */}
            <p
              
              style={{
                fontFamily: "monospace"
                
              }}
              className="col s5 brand-logo center black-text"
            >
              <h1>
              <b>Welcome to CMSIndoor</b>
              {/* <div><HomePage /></div> */}
              <div class = "logout">
   <DashBoard />
   </div>
              </h1>
              
            </p>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
