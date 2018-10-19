import React, { Component } from 'react';
// import Axios from 'axious'
import Form from './components/Form/Form';
import MovieContainer from './components/MovieContainer/MovieContainer';
import './App.css'


class App extends Component {
  state = {
    item: "",
    items: []
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { items, item } = this.state;
    this.setState({ items: [...items, item ], item: "" })
  }

  handleChange = (e) => {
    let { name, value } = e.target;
    // console.log(e);
    this.setState({ [name]: value })
  }
  render() {
    let { handleSubmit, handleChange } = this;
    let { items, item } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <h1>Movie Searcher!</h1>
          </div>
          </div>
          <div className="row">
            <div className="column">
            <Form 
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            item={item}/>
          </div>
        </div>
        <div className="row">
            <div className="column">
            {item.length > 0 
            ? <MovieContainer items={items}/>
            : <p>No Movies!</p>}
            </div>
          </div>
      </div>
    );
  }
}

export default App;
