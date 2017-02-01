import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAfUKgFJzLzctnVSmyXgOXOCQ5wW-3ZrzY';

// Create a new component that should produce some HTML
const App = () => {
  return <div>Hi!</div>;
}
// Take this component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
