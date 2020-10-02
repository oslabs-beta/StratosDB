import React, { Component } from 'react'
import { Interface } from 'readline'

interface obj {
  name: string; 
}

class Container extends Component<{}, obj> {
  state: obj = {name: 'Tyler'};
  render() {
    return (
      <div>
        <h1>{`${this.state.name}`}</h1>
      </div>
    )
  }
}

export default Container; 