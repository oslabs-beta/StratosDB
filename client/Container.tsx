import React, { Component, SyntheticEvent } from 'react';
import Announcement from './components/Announcement';
import CodeEditor from './components/CodeEditor';
import Sidebar from './components/Sidebar';
import axios from 'axios';

interface obj {
  name: string;
  //Announcement
  announcement: string;
  //codeEditorState
  schemaEntry: string;
  data: object;
  onClose: any;
  schemaName: string;
  //sideBar
  url: string;
}

class Container extends Component<{}, obj> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Tyler',
      announcement: 'Welcome to StratosDB',
      schemaEntry: '',
      data: {},
      onClose: true,
      schemaName: '',
      url: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  handleChange(event: string) {
    console.log('EVENT: ', event);
    this.setState({
      schemaEntry: event,
    });
  }

  handleSubmit(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();

    const schemaObj = {
      schemaEntry: this.state.schemaEntry,
    };

    axios.post('/results', schemaObj).then((data) => {
      console.log('logging data', data.data);
      this.setState({ data: data });
    });
  }
  // possibly needs componenet did update
  refresh(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    window.location.reload(false);
    // this.setState({
    //   name: 'Tyler', 
    //   announcement: 'Welcome to StratosDB',   
    //   schemaEntry: '', 
    //   data:{},
    //   onClose: true,
    //   schemaName: '',
    //   url: ''
    // })
    console.log("refreshing");
  }
  render() {
    return (
      <div id="main-container">
        <div id="left-panel">
          <Sidebar url={this.state.url} refresh={this.refresh} />
        </div>
        <div id="right-panel">
          <Announcement announcement={this.state.announcement} />
          <CodeEditor
            schemaEntry={this.state.schemaEntry}
            data={this.state.data}
            onClose={this.state.onClose}
            schemaName={this.state.schemaName}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}

export default Container;
