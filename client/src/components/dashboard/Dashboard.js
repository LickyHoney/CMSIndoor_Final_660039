import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
//import MapView from "./MapView.js";
import Map1 from "./Map1.js";
import { Link } from 'react-router-dom';
//import {MapContainer,  Marker, Popup,  TileLayer } from "react-leaflet";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Path } from "leaflet";


//import { useHistory } from 'react-router-dom';

class Dashboard extends Component {
  
  state = {
    isButtonDisabled: false
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    
  };
  
  
  render() {
    const { user } = this.props.auth;

    return (
      
      <div >
        {/* <span className="myClass" style={{float : 'left', paddingRight : '5px'}} > </span> */}
        {/* style="font-size: 20px; color:#4a54f1; text-align:center; padding-top:100px;" */}
       
               
                {/* <MapView /> */}
                
            <div>
           { user.name !== null && user.name !== undefined ?
            <div> <p style={{fontSize: '20px', color: 'white'}}> Hi <i><b>{user.name}</b></i></p>
            <button
            
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
                
              }}
              onClick={this.onLogoutClick}
              
              className="btn btn-primary float-left"
            >
              Logout
            </button>
            </div>
            :
            null
  }
  
           
            </div>
          </div>
        
        
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
