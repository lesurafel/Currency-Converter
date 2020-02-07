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
        <Link className="navbar-brand" to="/"><img src={logo} height='80' width='100' style ={{color:'white'}} alt="logo" /></Link>
        <div className="container currencyConverter">
          <h2>Currency Converter</h2>
          <form onSubmit={this.handleSubmit} className="my-4">
            <div className="row">
              <div className="d-none d-md-block col-md-1 my-2">tt
              </div>
              <div className="col-12 col-md-3 my-2">
                <input
                  type="text"
                  className="mr-sm-2 amount"
                  name = "amount"
                  onChange={this.handleChange}
                />
              </div>
              <div className="col-12 col-md-3 my-2">
                <select id="input" className='country' noChange>
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBT</option>
                  <option>CHN</option>
                </select>
              </div>
              <div className="d-none col-md-1 d-md-block my-2">
                <ion-icon src="" onClick >/|</ion-icon>
              </div>
              <div className="col-12 col-md-3  my-2">
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
              <div className="col-12 justify-content-center d-flex pt-3">
                <button type="submit" className="btn btn-primary auto"> Convert </button>
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
