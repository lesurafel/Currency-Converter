import React from 'react';
import { checkStatus, json } from './utils';
import {fullName} from './FullCountryName.js';

const ShowDetail = (props) => {
  return (
        <tr>
          <td>Country Name</td>
          <th className='d-none d-md-block'>Symbol</th>
          <td>{props.country}</td>
          <td>{props.rate}</td>
        </tr>
  );
}

class ShowSomeDetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        countrys: ['AUD', 'CAD', 'EUR', 'GBP', 'INR', 'ZAR'],
        results: null,
        path: `https://alt-exchange-rate.herokuapp.com/latest?base=USD&symbols=AUD,CAD,EUR,GBP,INR,ZAR`,
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
        this.setState({ results: data.rates });
    })
    .catch((error) => {
      return error.message;
    })
}

render () {
    const {countrys, results} = this.state;
    console.log(results);
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">United State</th>
            <th scope="col" className='d-none d-md-block'>Symbol</th>
            <th scope="col">USD</th>
            <th scope="col">1</th>
          </tr>
        </thead>
        <tbody>
          {(() => {
              return countrys.map((country) => {
                return <ShowDetail key={country} country={country} rates={results} />;
              })
            })()}
        </tbody>
      </table>
    );
  }
}

export default ShowSomeDetails;
