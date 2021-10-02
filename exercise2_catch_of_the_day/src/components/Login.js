import React, { Component } from "react";
import PropTypes from "prop-types";

const Login = (props) => (
  <nav className="login">
    <h2>Inventory login</h2>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Login with Github
    </button>
  </nav>
);

Login.propTypes = {
  authenticate: PropTypes.func.isRequired,
};

export default Login;
