import React, { Component } from "react";
//import { browserHistory } from 'react-router';
import NavBar from '../partials/_NavBar' 

export default class Registration extends Component {
  componentDidMount() {
    console.log("Registation Mounted");
  }
  render() {
    return (
      <div>
      <NavBar></NavBar>
      
        Registration placeholder
      </div>
    );
  }
}