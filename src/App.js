/* eslint-disable no-console */
import React from 'react';
import './App.css';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userActive: false,
      isLoaded: false,
      people: [],
      details: []
    };
  }

  fetchHandler = () => {
    fetch('http://uinames.com/api/?amount=5')
      .then(res => res.json())
      .then(people => {
        this.setState({
          people
        });
      });
  };

  detailHandler = index => {
    this.setState({
      userActive: true,
      details: this.state.people[index]
    });
  };

  renderDetails(details) {
    if (!this.state.userActive) {
      null;
    } else {
      return (
        <div>
          <h1>
            {details.name} {details.surname}
          </h1>
          <li>Gender: {details.gender}</li>
          <li>Region: {details.region}</li>
        </div>
      );
    }
  }

  render() {
    const { details } = this.state;

    return (
      <div>
        <div id="control-panel">
          <button onClick={this.fetchHandler}>Get Users!</button>
        </div>
        <div>
          <p>No user to show yet...</p>
          <div>
            <img />
          </div>
          <div>
            <ul>
              {this.state.people.map((person, index) => (
                <li onClick={() => this.detailHandler(index)} key={index}>
                  {person.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <ul>{this.renderDetails(details)}</ul>
        </div>
      </div>
    );
  }
}

export default Test;
