import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component<{}, { name: string }> {
  render() {
    return (
      <div>
        <h1>HELLO! This is Joal, Sophia, Tyler, and Tommy!</h1>
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
