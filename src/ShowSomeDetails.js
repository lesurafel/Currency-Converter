import React from 'react';
import { Link } from "react-router-dom";
import { checkStatus, json } from './utils';
import {fullName} from './FullCountryName.js';
const ShowDetail = (props) => {
  if(props.country==='USD') {
    return null;
  }
  return (
    <tr>
      <td >{props.ctryName}</td>
      <td className='d-none d-md-block'><img id='ctryFlag'src={props.ctryFlag} alt=""/></td>
      <td >{props.country}</td>
      <td >{props.rates}</td>
    </tr>
  );
}

class ShowSomeDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        results: null,
        path: `https://alt-exchange-rate.herokuapp.com/latest?base=USD&symbols=AUD,CAD,EUR,GBP,INR,ZAR`,
        showSomedetail: true,
        showDetailMenu: "Show more detail",
        timer: null
      }
      this.changeShowStatus = this.changeShowStatus.bind(this);
      this.updateData = this.updateData.bind(this);
  }

  changeShowStatus(event) {
    event.preventDefault();
    if (this.state.showSomedetail) {
      this.setState({
        showSomedetail: false,
        showDetailMenu: "Show more detail",
        path: `https://alt-exchange-rate.herokuapp.com/latest?base=USD`,
      });
    } else {
      this.setState({
        showSomedetail: true,
        showDetailMenu: "Show some detail",
        path: `https://alt-exchange-rate.herokuapp.com/latest?base=USD&symbols=AUD,CAD,EUR,GBP,INR,ZAR`,
      });
    }
    this.updateData();
  }

updateData () {
  const {path} = this.state;
  fetch(path).then(checkStatus)
    .then(json)
    .then((data) => {
      if (data.Response === 'False') {
        throw new Error(data.Error);
      }
        this.setState({ results: data});
    })
    .catch((error) => {
      return error.message;
    })
}

componentDidMount () {
  this.timer = setInterval(
      () => this.updateData(),
      1000
  );
}

componentWillUnmount () {
  clearInterval(this.timer);
}

render () {
    const {results} = this.state;
    return (
      <div className='w-100'>
      <div className="row">
        <div className="col-12  mt-2 mt-md-4 mx-2 mx-md-4">
          <Link to="/" onClick={this.changeShowStatus}>{this.state.showDetailMenu}</Link>
        </div>
      </div>
      <table className="table table-striped table-hover align-content-center">
        <thead>
          <tr>
            <th >United State</th>
            <th className='d-none d-md-block'><img id='ctryFlag'src={`./ctryFlag/USD.png`} alt=""/></th>
            <th >USD</th>
            <th >1.00</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
            if(!results) {
              return;
            }
            const {rates} = results;
            const ctryAbb = Object.keys(rates);
            return ctryAbb.map((keyName) => {
              return <ShowDetail key={keyName} ctryName={fullName[keyName]} ctryFlag={`./ctryFlag/${keyName}.png`} country={keyName} rates={results.rates[keyName]} />;
            })
          })()}
        </tbody>
      </table>
      </div>
    );
  }
}

export default ShowSomeDetails;
