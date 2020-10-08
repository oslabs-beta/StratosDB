import React, { Component, SyntheticEvent } from 'react';
import Announcement from './components/Announcement';
import CodeEditor from './components/CodeEditor';
import Sidebar from './components/Sidebar';
import LineGraph from './components/LineGraph';
import axios from 'axios';

interface ContainerState {
  queries: {
    queryString: string;
    queryData: {}[];
    queryStatistics: any;
    querySchema: string;
    queryLabel: string;
  }[];
  //Announcement
  announcement: string;
  //codeEditorState
  schemaEntry: string;
  onClose: any;
  schemaName: string;
  //sideBar
  url: string;
}

class Container extends Component<{}, ContainerState> {
  constructor(props: {}) {
    super(props);

    this.schemaChange = this.schemaChange.bind(this);
    this.schemaSubmit = this.schemaSubmit.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  state: ContainerState = {
    queries: [],
    announcement: 'Welcome to StratosDB',
    schemaEntry: '',
    onClose: true,
    schemaName: '',
    url: '',
  };

  componentDidMount() {
    const newQuery = {
      queryString: 'hey',
      queryData: [{ test: 'test' }],
      queryStatistics: 'is',
      querySchema: 'a',
      queryLabel: 'test',
    };
    let queries = this.state.queries.slice();
    this.setState({ queries });
  }

  schemaChange(event: string) {
    console.log('EVENT: ', event);
    this.setState({
      schemaEntry: event,
    });
  }

  schemaSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    const schemaObj = {
      schemaEntry: this.state.schemaEntry,
    };
    console.log('queryData', schemaObj);
    axios.post('/results', schemaObj).then((data) => {
      console.log('logging data', data.data);
      // this.setState({ queries.queryData: data });
    });
  }
  // possibly needs componenet did update
  refresh(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    window.location.reload(false);
    console.log('refreshing');
  }
  render() {
    return (
      <div id="main-container">
        <div id="left-panel">
          <Sidebar url={this.state.url} refresh={this.refresh} />
        </div>
        <div id="right-panel">
          <Announcement announcement={this.state.announcement} />
          <div id="main-feature">
            <CodeEditor
              schemaEntry={this.state.schemaEntry}
              data={this.state.queries}
              onClose={this.state.onClose}
              schemaName={this.state.schemaName}
              schemaChange={this.schemaChange}
              schemaSubmit={this.schemaSubmit}
            />
            <LineGraph queries={this.state.queries} />
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
