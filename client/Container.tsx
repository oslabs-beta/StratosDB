import React, { Component } from 'react'
import Announcement from './Announcement';

interface obj {
  name: string; 
}

class Container extends Component<{}, obj> {
  state: obj = {name: 'Tyler'};
  render() {
    return (
      <div>
        <Announcement />
      </div>
    )
  }
}

export default Container; 
