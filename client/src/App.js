import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
//import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import ModalTemplate from "./components/dashboard/ModalTemplate"
import PrivateRoute from "./components/private-route/PrivateRoute";
//import Dashboard from "./components/dashboard/DashboardCms/index";
//import MapView from "./components/dashboard/MapView";



import "./App.css";
import Map1 from "./components/dashboard/Map1";
//import FloorMap from "./components/dashboard/FloorMap";
import FloorMap from "./components/dashboard/FloorMap";
import ViewBuilding from "./components/dashboard/ViewBuilding";
import EditBuilding from "./components/dashboard/EditBuilding";

import EditFloormap from "./components/dashboard/EditFloormap";
//import Routing from "./components/dashboard/Routing";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
          

           <Navbar /> 
            <Route exact path="/" component={Login} />
           
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />

            <Route path="/FloorMap/:refnum" component={FloorMap} /> 
            {/* <Route exact path="/EditFloormap/:refnum" component={EditFloormap} /> */}
            <Route exact path="/modaltemplate" component={ModalTemplate} />
            <Route exact path="/ViewBuilding/:refnum" component={ViewBuilding} />
            <Route exact path="/EditBuilding/:refnum" component={EditBuilding} />


            {/* <Route exact path="/routing" component={Routing}/> */}
            {/* <Route path="/MazeMap" component={MazeMapWrapper} /> */}

            <Switch>
              {/* <PrivateRoute exact path="/dashboard" component={Dashboard} />  */}
              <PrivateRoute exact path="/Map1" component={Map1} /> 
              {/* <PrivateRoute exact path="/ViewBuilding" component={ViewBuilding} /> */}
              {/* <PrivateRoute exact path="/EditFloormap" component={EditFloormap} /> */}
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
