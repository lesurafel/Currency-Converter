import React from 'react';
import { Link } from "react-router-dom";
import logo from './logo.svg';
import { json, checkStatus } from './utils';

const TopFourList = (props) => {
  /*const {
    base,
    date,
    rates,
  } = props.exchange;*/

  return (
    <div className="row">
      <div className="col-12 my-3">
        <Link to="/about/">Show more detail</Link>
      </div>
      <div className="col-12 mt-3">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">United State</th>
              <th scope="col">USD</th>
              <th scope="col">1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Euro</td>
              <td>ERO</td>
              <td>0.000000</td>
            </tr>
            <tr>
              <td>Grate Brtain</td>
              <td>GBT</td>
              <td>0.000000</td>
            </tr>
            <tr>
              <td>China</td>
              <td>CHN</td>
              <td>0.000000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> // end of row
  )// end of return
}// end of listTopFour

class convertExchange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      base: '',
      date:'',
      rates: {},
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({ searchTerm: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

  }
  render() {
    const { searchTerm, results, error } = this.state;
    return (
      <fragment>
      <div id='main' className='container-fluid' >

        <div className="container currencyConverter">
          <div className='row'>
            <div className='col-2 pt-5'>
              <Link className="navbar-brand" to="/"><img src={logo} height='80' width='100' alt="logo" /></Link>
            </div>
            <div className='col-8 pt-5 d-flex align-content-end '>
              <h2>Currency Converter</h2>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="my-4">
            <div className="row">
              <div className="col-12 col-md-3 my-2">
                <label styClassName=''>Amount</label>
                <input
                  type="text"
                  className="mr-sm-2 amount"
                  name = "amount"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 col-md-4 my-2">
                <label styClassName=''>From</label>
                <select id="input" className='country' noChange>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBT</option>
                  <option>CHN</option>
                </select>
              </div>
              <div className="d-none col-md-1 d-md-block my-2">
                <ion-icon src="" onClick ></ion-icon>
              </div>
              <div className="col-12 col-md-4  my-2">
                <label styClassName=''>To</label>
                <select id="input" className='country' noChange>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBT</option>
                  <option>CHN</option>
                </select>
              </div>
              <div className="d-none col-md-1 d-md-block my-2">
              </div>
            </div>
            <div className = 'row'>
              <div className="col-12 justify-content-end d-flex pt-2 pl-2">
                <button type="submit" className="btn btn-secondary btn-lg"> Convert </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <TopFourList/>
        </div>
      </div>
      </fragment>
    )
  }// End of Render
}// End of converExchange

export default convertExchange;
