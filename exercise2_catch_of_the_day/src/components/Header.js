import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="top">
          <h1>
            Catch
            <span className="ofThe">
              <span className="of">of</span>
              <span className="the">the</span>
            </span>
            Day
          </h1>
          <h3 className="tagline">
            <span>Fresh Seafood Market</span>
          </h3>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
