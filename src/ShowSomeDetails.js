import React from 'react';
import { checkStatus, json } from './utils';
import {fullName} from './FullCountryName.js';
const ShowDetail = (props) => {
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
        countrys: ['AUD', 'CAD', 'EUR', 'GBP', 'INR', 'ZAR'],
        results: null,
        path: props.path,
      }
  }

componentDidMount () {
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

render () {
    const {countrys, results} = this.state;
    const keyNames = Object.keys(fullName);
    return (
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
            return keyNames.map((keyName) => {
              return <ShowDetail key={keyName} ctryName={fullName[keyName]} ctryFlag={`./ctryFlag/${keyName}.png`} country={keyName} rates={results.rates[keyName]} />;
            })
          })()}
        </tbody>
      </table>
    );
  }
}

export default ShowSomeDetails;
