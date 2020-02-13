import React from 'react';
import { Link } from "react-router-dom";
import logo from './images/logo.png';
import backforth from './images/backforth.png';
import {fullName} from './FullCountryName.js'
import ShowSomeDetails from './ShowSomeDetails.js';
/*import { json, checkStatus } from './utils';*/

class convertExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      date:'',
      rates: {},
      error: '',
      amount: 0,
      fstCtryAbb: 'USD',
      fstCtryFullName: 'US Dollar',
      fstCtryFlag: 'USD.png',
      sndCtryAbb: 'EUR',
      sndCtryFullName: 'Euro',
      sndCtryFlag: 'EUR.png',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.GenerateOptionButton = this.GenerateOptionButton.bind(this);
    this.FillMenu = this.FillMenu.bind(this);
  }

  handleChange(event) {
    //this.setState({ searchTerm: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  GenerateOptionButton (props) {
    const keyName = props.keyName;
    return (
      <option name={keyName}> {keyName} </option>
    )
  }

  FillMenu(props) {
    const keyNames = Object.keys(fullName);
    console.log(props.name);
    return (
      <select className="country">
        <option name={props.name}><div><img id='ctryFlag'src={`./ctryFlag/${props.name}.png`} alt=""/></div>{props.name}</option>
        {keyNames.map(keyName => <this.GenerateOptionButton key={keyName} keyName = {keyName}/>)}
      </select>
    );
  }

  render() {
    //const { searchTerm, results, error } = this.state;
    return (
      <fragment>
      <div id='main' className='container-fluid' >
        <div className="container currencyConverter">
          <div className='row'>
            <div className='col-2 pt-2 pt-md-5'>
              <Link className="navbar-brand logo" to="/"><img src={logo} height='80' width='80' alt="logo" /></Link>
            </div>
            <div className='col-8 pt-2 pt-md-5 d-flex align-items-center'>
              <h2>Currency Converter</h2>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="my-1 my-md-4">
            <div className="row">
              <div className="col-12 col-md-3 my-1 my-md-2">
                <label className=''>Amount</label>
                <input
                  type="text"
                  className="mr-sm-2 amount"
                  name = "amount"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 col-md-4 my-2">
                <label className=''>From</label>
                <this.FillMenu name={this.state.fstCtryAbb}/>
              </div>
              <div className="d-none col-md-1 pt-md-4 px-sm-1 d-md-flex align-items-center">
                <img src={backforth} height='60' width='60' alt="12345" />
              </div>
              <div className="col-12 col-md-4  my-2">
                <label className=''>To</label>
                <this.FillMenu name={this.state.sndCtryAbb}/>
              </div>
            </div>
            <div className = 'row'>
              <div className="col-12 justify-content-end d-flex pt-2 pl-2">
                <button type="submit" className="btn btn-secondary btn-lg"> Convert </button>
              </div>
            </div>
          </form>
          <div className='row'>
            <div className='col-12 pt-3 d-flex justify-content-end align-items-end'>
              <h2>Date</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <ShowSomeDetails/>
        </div>
      </div>
      </fragment>
    )
  }// End of Render
}// End of converExchange

export default convertExchange;
