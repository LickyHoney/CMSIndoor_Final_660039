import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import '../../assets/scss/style.scss';
import '../../assets/css/main-css.css';
import classnames from "classnames";
// import {
//   TransitionGroup,
//   CSSTransition
// } from "react-transition-group";
//import {Nav,NavItem,NavLink,TabContent,TabPane} from 'reactstrap';
import { Row, Col, Card, CardBody } from 'reactstrap';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      //this.props.history.push("/dashboard");
      this.props.history.push("/map1");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      //this.props.history.push("/dashboard");
      this.props.history.push("/map1");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        
        
        <div style={{ marginTop: "20rem" }} className="row">
          <div className="col s8 offset-s2">
            {/* <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link> */}
            
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h1>
                <b>LogIn</b> 
              </h1>
              
            </div>
         
            
            <form noValidate onSubmit={this.onSubmit} >
            
              
            <Card className="iq-card">
                    <CardBody className="iq-card-body">
              <div className="form-group">
              <Row>
              <Col sm="4">
              <label htmlFor="email">Email</label>
              </Col>
              <Col>
              
                <input 
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  className={classnames("form-control", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
               
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
                </Col>
                </Row>
              </div>
             
              <div className="form-group">
              <Row>
              
              <Col sm="4">
              <label htmlFor="password">Password</label>
              </Col>
              <Col>
                <input 
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Enter password"
                  className={classnames("form-control", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
                </Col>
                
                </Row>
                
              
              </div>
              
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-primary float-left"
                >
                  Login
                </button>
              </div>
              </CardBody>
                </Card>
                <p className="grey-text text-darken-1" style={{fontSize: '20px'}}>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </form>
          </div>
        </div>
        
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
