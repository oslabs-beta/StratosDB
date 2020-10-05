import React, { Component } from 'react';

interface AnnouncementState {
  announcement1: string;
  announcement2?: string;
  announcement3?: string;
}

class Announcement extends Component<{}, AnnouncementState> {
  state: AnnouncementState = { announcement1: 'Hey this works' };
  render() {
    return (
      <div id="announcement-bar">
        <h1>{`${this.state.announcement1}`}</h1>
      </div>
    );
  }
}

export default Announcement;
