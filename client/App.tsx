import React, { Component } from 'react';
import { render } from 'react-dom';
import Container from './Container';
import 'codemirror/lib/codemirror.css';
import './assets/stylesheets/scss/application.scss';

class App extends Component<{}, { name: string }> {
  render() {
    return (
      <div id='app'>
        <Container />
      </div>
    );
  }
}

render(<App />, document.querySelector('#root'));
