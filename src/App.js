import React, { Component } from "react";
import "./styles.css";
import Cards from "./Cards";
import Charts from "./Charts";
import Bars from "./Bars";
import corona from "./image/corona.png";
import two from "./image/2nd.png";
import third from "./image/3rd.png";
import four from "./image/4th.png";
import Line from "./Line";
// import {Button, Card} from "@material-ui/core";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data1: {},
      data2:{}
    };
  }
  componentDidMount() {
    fetch("https://covid19.mathdro.id/api/countries/bangladesh")
      .then(res => res.json())
      .then(json => this.setState({ data1: json }));
    fetch("https://api.covid19api.com/dayone/country/bangladesh")
      .then(res => res.json())
      .then(json => this.setState({ data2: json }));
  }
  render() {
    let { data1, data2} = this.state;
    // data2 = data2.slice(77);
    return (
      <div>
      <div className="container">
        <img className="image" src ={corona} alt="CoronaImage"/>
      </div>
        <Cards data1={data1} data2={data2} />
        <br/>
        <div className="container">
          <img className="image3" src ={third} alt="CoronaImage"/>
        </div>
        <Charts/>
        <div className="container">
        <img className="image4" src ={four} alt="CoronaImage"/>
        </div>
          <Line confirmedTillNow={data1.confirmed}/>
        <div className="container">
          <img className="image2" src ={two} alt="CoronaImage"/>
        </div>
        <Bars/>
        <div>
          <h4 className="container">
            source: dghs.gov.bd and WHO
          </h4>
        </div>
      </div>
    );
  }
}
