import React, { Component } from 'react';

export default class AirCard extends Component {
// const currentUser = localStorage.getItem('token');
//     if (currentUser) {


  
  componentDidMount() {
    console.log("AirCard Mounted");
  }
  airRatingStrings = {
    AQI1 : "Breath deep and travel far and wide.",
    AQI2 : "An okay day for short excursions, but maybe delay the marathon",
    AQI3: "...Might be a good day for indoor activities. It's a tough day outside, for the lungs and heart.",
    AQI4: "Take it easy and take shelter. Limit outdoor time or heavy exersions, where possible",
    AQI5: "Significant health risks. Avoid prolonged exposure outside",
    AQI6: "Hazardous. Serious lung and heart aggravation. Everyone should avoid all outdoor exertion",
    AQI_null: "Service tower unavailable for this area"
  }
  extractrating(rating){
    if (rating === "alert1"){
      return this.airRatingStrings.AQI1
    }
    else if (rating === "alert2"){
      return this.airRatingStrings.AQI2
    }
    else if (rating === "alert3"){
      return this.airRatingStrings.AQI3
    }
    else if (rating === "alert4"){
      return this.airRatingStrings.AQI4
    }
    else if (rating === "alert5"){
      return this.airRatingStrings.AQI5
    }
    else if (rating === "unavailable"){
      return this.airRatingStrings.AQI_null
    }
  }

//separate file create and object with and object
  //export const airstrings = {"AQ1": "something"}
  //airSTrings and try to access the object    AQ + props

  render() {

    // const currentUser = localStorage.getItem('token');
    // if (currentUser) {
    return (
    <>
      {this.extractrating(this.props.airRating)}
    </>

    );
  }
}
