import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Map1 from './Map1';
import FloorMap from './FloorMap';
//import Dashboard from '../dashboard/DashboardCms/index';
//import AddBuilding from './AddBuilding';
import axios from 'axios';
import DisplayEntries from "./DisplayEntries"
import { Map, CircleMarker, Popup, Marker, TileLayer,Tooltip,ZoomControl, Polygon } from "react-leaflet";
import { userActions } from '../_actions';


class HomePage extends React.Component {
    
    componentDidMount() {
        this.props.getUsers();
        
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }
    

    render() {
      
    
        const { user, users } = this.props;
        return (
            <div>
              <div class="header">
              <div class= "first">
                <p style={{ color: 'white' }}> Indoor CMS</p></div>
                <div class="second">
                  <p>{user.firstName}</p>
        <p> <Link to="/login">Logout</Link></p></div>
                </div>
              
             <FloorMap />
            </div>
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
