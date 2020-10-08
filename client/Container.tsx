import React, { Component, SyntheticEvent } from "react";
import Announcement from "./components/Announcement";
import CodeEditor from "./components/CodeEditor";
import Sidebar from "./components/Sidebar";
import LineGraph from "./components/LineGraph";
import axios from "axios";

interface ContainerState {
  queries: {}[];
  // {
  //   queryString: string;
  //   queryData: {}[];
  //   queryStatistics: any;
  //   querySchema: string;
  //   queryLabel: string;
  // };
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
    this.testFunc = this.testFunc.bind(this);
  }

  state: ContainerState = {
    queries: [],
    //  {
    //   queryString: "",
    //   queryData: [],
    //   queryStatistics: "",
    //   querySchema: "",
    //   queryLabel: "",
    // },
    announcement: "Welcome to StratosDB",
    schemaEntry: "",
    onClose: true,
    schemaName: "",
    url: "",
  };

  testFunc = () => {
    const newQuery: any = {
      queryString: "hey",
      queryData: [{ test: "test" }],
      queryStatistics: "is",
      querySchema: "a",
      queryLabel: "test",
    };
    this.setState({
      queries: newQuery,
    });
  };

  componentDidMount() {
    // let queries = this.state.queries.slice();
    // queries.push(newQuery);
    console.log("state.queries1: ", this.state);
    this.testFunc();
    console.log("state.queries2: ", this.state);
  }

  schemaChange(event: string) {
    console.log("EVENT: ", event);
    this.setState({
      schemaEntry: event,
    });
  }

  schemaSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    console.log("state.queries before axios: ", this.state);

    const schemaObj: any = {
      schemaEntry: this.state.schemaEntry,
    };
    console.log("queryData", schemaObj);
    axios.post("/results", schemaObj).then((data) => {
      console.log("explain data", data.data[0]);
      this.setState({ queries: data.data[0] });
      console.log("state after axios: ", this.state);
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
            <div id="queries-results-panel">
              <div id="query-request">
                <textarea id="query-input"></textarea>
                <button id="query-submit">Submit Query</button>
              </div>
              <div id="visual-data">
                <LineGraph queries={this.state.queries} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
