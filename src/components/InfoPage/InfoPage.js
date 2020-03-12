import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'




class InfoPage extends Component {

  state={items:''}
  componentDidMount() {
    this.getItems();
  }

  getItems = () => {
    axios.get('/api/shelf')
      .then(response => {
        console.log('response is', response.data)
        this.setState({
          items:response.data})
      });
  }

  render() {
    return (

  <div>
    <ul>
      {this.state.items &&
      this.state.items.map(item=>(<li>{item.description}</li>))}
    </ul>
  </div>
);

    }
  }
    export default connect()(InfoPage)
