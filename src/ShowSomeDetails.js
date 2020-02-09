import React from 'react';
import { Link } from "react-router-dom";
import { json, checkStatus } from './utils';
import {fullName} from './FullCountryName.js'

class ShowSomeDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: [],
      error: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let { searchTerm } = this.state;
    searchTerm = searchTerm.trim();
    if (!searchTerm) {
      return;
    }
    fetch(`https://alt-exchange-rate.herokuapp.com/latest?base=USD&symbols=EUR,GBP,AUD,CAD,ZAR`)
      .then(checkStatus)
      .then(json)
      .then((data) => {
        if (data.Response === 'False') {
          throw new Error(data.Error);
        }
        if (data.Response === 'True' && data.Search) {
          console.log(data);
          this.setState({ results: data.Search, error: '' });
        }
      })
      .catch((error) => {
        this.setState({ error: error.message });
        console.log(error);
      })
  }
  render() {
    const { searchTerm, results, error } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form onSubmit={this.handleSubmit} className="form-inline my-4">
              <input
                type="text"
                className="form-control mr-sm-2"
                placeholder="frozen"
                value={searchTerm}
                onChange={this.handleChange}
              />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            {(() => {
              if (error) {
                return error;
              }
              return results.map((movie) => {
                return <Movie key={movie.imdbID} movie={movie} />;
              })
            })()}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowSomeDetails;
