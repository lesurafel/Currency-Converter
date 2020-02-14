import React from 'react';
import { Link } from "react-router-dom";
import { checkStatus, json } from './utils';
import logo from './images/logo.png';
import backforth from './images/backforth.png';
import {fullName} from './FullCountryName.js';
import ShowSomeDetails from './ShowSomeDetails.js';

/*import { json, checkStatus } from './utils';*/

class convertExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      result: 0,
      error: '',
      amount: 1,
      fstCtryAbb: 'USD',
      fstCtryFullName: 'US Dollar',
      fstCtryFlag: 'USD.png',
      sndCtryAbb: 'EUR',
      sndCtryFullName: 'Euro',
      sndCtryFlag: 'EUR.png',
      rate: 0,
      reversRate: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.GenerateOptionButton = this.GenerateOptionButton.bind(this);
    this.FillMenu = this.FillMenu.bind(this);
    this.handleBaseAmount = this.handleBaseAmount.bind(this);
    this.swapCountry = this.swapCountry.bind(this);
    this.showResult = this.showResult.bind(this);
    this.convertTo = this.convertTo.bind(this);
  }

  handleChange(event) {
    const value = parseFloat(event.target.value);
    if(!Number.isNaN(value)){
      this.setState({amount: value});
    } else {
      this.setState({amount: ''});
    }
  }

  openDatabase() {
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=${this.state.fstCtryAbb}&symbols=${this.state.sndCtryAbb}`).then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
          this.setState({
            rate: data.rates[this.state.sndCtryAbb],
            date: data.date
          });
          this.convertTo();
      })
      .catch((error) => {
        return error.message;
      })
  }
  handleSubmit(event) {
    event.preventDefault();
    this.openDatabase();
  }

  convertTo() {
    const { rate, amount} = this.state;
    if(amount) {
      this.setState({
        result: rate * amount.toFixed(4),
        reversRate: 1/rate
      });
    }
  }

  handleBaseAmount(event) {
    const {name, value} = event.target;
    if(name==='fstOptionBtn') {
      this.setState({
        fstCtryAbb: value
      });
    } else {
      this.setState({
        sndCtryAbb: value
      });
    }
  }

  swapCountry(){
    const {fstCtryAbb, sndCtryAbb} = this.state;
    const temp = fstCtryAbb;
    this.setState({
      fstCtryAbb: sndCtryAbb,
      sndCtryAbb: temp
    });
    this.openDatabase();
  }

  GenerateOptionButton (props) {
    const ctryAbb = props.ctryAbb;
    return (
      <option> {ctryAbb} </option>
    )
  }

  FillMenu(props) {
    const ctryAbbs = Object.keys(fullName);
    return (
      <select name={props.name} value={props.value} onChange={this.handleBaseAmount} className="country">
        <option>{props.value}</option>
        {ctryAbbs.map(ctryAbb => <this.GenerateOptionButton key={ctryAbb} ctryAbb = {ctryAbb}/>)}
      </select>
    );
  }

  showResult(){
    const { date, rate, reversRate, result, fstCtryAbb, sndCtryAbb } = this.state;
    if(!result) {
      return <div></div>;
    }
    return (
      <div>
        <div className='row'>
          <div className='col-12 pt-1 pt-md-3 d-flex justify-content-end align-items-end'>
            <h4>Date: {date}</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 pt-1 pt-md-3 resultBox'>
            <p>1 {fstCtryAbb} = <span id="result"> {result} {sndCtryAbb}</span></p>
            <p>1 {fstCtryAbb} = {rate} {sndCtryAbb}</p>
            <p>1 {sndCtryAbb} = {reversRate} {fstCtryAbb}</p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { amount, fstCtryAbb, sndCtryAbb } = this.state;
    return (
      <fragment>
      <div id='main' className='container-fluid' >
        <div className="container currencyConverter">
          <div className='row'>
            <div className='col-2 pt-1 pt-md-5'>
              <Link className="navbar-brand logo" to="/"><img src={logo} height='80' width='80' alt="logo" /></Link>
            </div>
            <div className='col-8 pt-1 pt-md-5 d-flex align-items-center'>
              <h2>Currency Converter</h2>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="my-1 my-md-4">
            <div className="row">
              <div className="col-12 col-md-3 my-1 my-md-2">
                <label className=''>Amount</label>
                <input
                  className="mr-sm-2 amount"
                  name = "amount"
                  value = {amount}
                  type = "text"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 col-md-4 my-2">
                <label className=''>From</label>
                <this.FillMenu name="fstOptionBtn" value={fstCtryAbb} />
              </div>
              <div className="d-none col-md-1 pt-md-4 px-sm-1 d-md-flex align-items-center backforth">
                <img src={backforth} height='60' width='60' alt="12345" onClick={this.swapCountry}/>
              </div>
              <div className="col-12 col-md-4  my-2">
                <label className=''>To</label>
                <this.FillMenu name="sndOptionBtn" value={sndCtryAbb}/>
              </div>
            </div>
            <div className = 'row'>
              <div className="col-12 justify-content-end d-flex pt-2 pl-2">
                <button type="submit" className="btn btn-secondary btn-lg"> Convert </button>
              </div>
            </div>
          </form>
          <this.showResult/>
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
