import React, { Component } from 'react';
import Announcement from './components/Announcement';
import CodeEditor from './components/CodeEditor';
import Sidebar from './components/Sidebar';
import LineGraph from './components/LineGraph';
import axios from 'axios';
import Table from './components/Table';

interface ContainerState {
  queries: any;
  queryStatistics: any;
  queryHistory: any;
  queryEntry: any;
  queryTable: any;
  //Announcement
  announcement: string;
  //codeEditorState
  schemaEntry: string;
  schemaName: string;
  //Sidebar
  awsModalIsOpen: boolean;
  awsInfo: {
    user: string;
    host: string;
    database: string;
    password: string;
    port: string;
  };
  infoModalIsOpen: boolean;
  selectedFile: any;
  uploadModalIsOpen: boolean;
  injectedCode: string;
}

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

// class Componenet, Container
class Container extends Component<{}, ContainerState> {
  constructor(props: {}) {
    super(props);
  }

  // ContainerState types
  state: ContainerState = {
    queries: [],
    queryStatistics: [],
    queryHistory: [],
    queryEntry: '',
    queryTable: [],
    announcement: 'Welcome to StratosDB Beta',
    schemaEntry: '',
    schemaName: '',
    awsModalIsOpen: false,
    awsInfo: {
      user: '',
      host: '',
      database: '',
      password: '',
      port: '',
    },
    infoModalIsOpen: false,
    selectedFile: 'hello',
    uploadModalIsOpen: false,
    injectedCode: '',
  };

  //  componentDidMount sends an axios request with result data once componenet is mounted
  componentDidMount() {
    axios.get('/refresh').catch((err) => console.error(err));
  }

  // UPDATING SCHEMA STATE DURING TYPING
  schemaChange = (event: string) => {
    this.setState({
      schemaEntry: event,
    });
  };

  // SUBMITTING SCHEMA CODE TO BACKEND
  schemaSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const schemaObj: any = {
      schemaEntry: this.state.injectedCode,
    };
    axios.post('/newSchema', schemaObj).then((data) => {
      this.setState({ queries: data.data[0] });
    });
  };

  // UPDATING QUERY STATE WHILE TYPING
  queryChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      queryEntry: event.target.value,
    });
  };

  // SUBMITTING QUERY SEARCH TO BACKEND
  querySubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    let historyArr: any = this.state.queryHistory;
    historyArr.push(this.state.queryEntry);
    this.setState({
      queryHistory: historyArr,
    });

    // DIFFERENT OBJECT FOR QUERY ENTRY
    const queryObj: any = {
      queryEntry: this.state.queryEntry,
    };
    let newArr: any = this.state.queryStatistics;
    axios.post('/results', queryObj).then((data) => {
      newArr = newArr.concat(data.data.queryStatistics[0]['Execution Time']);
      this.setState({
        queryStatistics: newArr,
        queryTable: data.data.queryTable,
      });
    });
  };

  // ESTABLISH CLOUD CONNECTION FUNCTION
  connect = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // ADD THE PROPERTIES IN THE FORM INTO STATE BY USING SETSTATE
    let info = this.state.awsInfo;
    // REMEMBER TO CHANGE THIS INTO A POST REQUEST ONCE WE GET THE ROUTE WORKING
    axios
      .post('/connect', info)
      .catch((err) => console.log('There has been an error: ', err));

    // CLOSING MODAL
    this.setState({ awsModalIsOpen: false });
  };

  // SHOW POPUP CLOUD MODAL
  awsOpenModal = () => {
    this.setState({ awsModalIsOpen: true });
  };

  awsCloseModal = () => {
    this.setState({ awsModalIsOpen: false });
  };

  // SHOW POPUP INFO MODAL
  infoOpenModal = () => {
    this.setState({ infoModalIsOpen: true });
  };

  infoCloseModal = () => {
    this.setState({ infoModalIsOpen: false });
  };

  uploadOpenModal = () => {
    this.setState({ uploadModalIsOpen: true });
  };

  uploadCloseModal = () => {
    this.setState({ uploadModalIsOpen: false });
  };

  // UPDATING STATE TO LOCATION OF FILE
  fileUpdate = (event: any) => {
    this.setState({
      injectedCode: '',
    });
    // PULL NEW FILE TARGET
    const newFile = event.target.files[0];
    // SET NEW FILE TO STATE
    this.setState({ selectedFile: newFile });
    // READ FILE
    const reader = new FileReader();
    reader.onload = (event: any) => {
      // PULL TEXT FROM EVENT.TARGET
      const newText = event.target.result;
      // PARSE THROUGH ANY REGEX ISSUES
      const lines = newText.split(/\r\n|\n/);
      // SETTING STATE TO PERSIST INJECTED CODE
      this.setState({
        injectedCode: lines.join('\n'),
      });
    };

    // ERROR HANDLER FOR FILEREADER
    reader.onerror = (event: any) => {
      console.log(event.target.error.name);
    };

    // FILEREADER FUNCTION ON NEWFILE
    reader.readAsText(newFile);
  };

  // SENDING FILE TO BACKEND
  fileUpload = () => {
    // SETTING UPDATING SCHEMAENTRY STATE WITH NEW INJECTED CODE

    this.setState({
      uploadModalIsOpen: false,
    });

    // SETTING FILE META DATA AS FORM DATA TO SEND TO SERVER
    const data = new FormData();
    // APPENDING FILE TO DATA
    data.append('myFile', this.state.selectedFile);
    // SENDING FILE TO SERVER FOR PROCESSING AND UPLOADING
    axios
      .post('/upload', data)
      .catch((err) => console.log('Error in file upload: ', err));
  };

  // EMPTY CODE EDITOR TEXT ON X BUTTON CLICK
  emptyInject = () => {
    this.setState({
      injectedCode: '',
    });
  };

  // CHANGING AWSINFO STATE
  awsInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    let newAWS: any = { ...this.state.awsInfo };
    newAWS[id] = value;
    this.setState({ awsInfo: newAWS });
  };

  // possibly needs component did update
  refresh = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    window.location.reload(false);
  };

  render() {
    return (
      <div id='main-container'>
        <div id='left-panel'>
          <Sidebar
            refresh={this.refresh}
            connect={this.connect}
            awsModalIsOpen={this.state.awsModalIsOpen}
            awsOpenModal={this.awsOpenModal}
            awsCloseModal={this.awsCloseModal}
            awsInfo={this.state.awsInfo}
            awsInfoChange={this.awsInfoChange}
            infoOpenModal={this.infoOpenModal}
            infoCloseModal={this.infoCloseModal}
            infoModalIsOpen={this.state.infoModalIsOpen}
            selectedFile={this.state.selectedFile}
            fileUpload={this.fileUpload}
            fileUpdate={this.fileUpdate}
            uploadModalIsOpen={this.state.uploadModalIsOpen}
            uploadOpenModal={this.uploadOpenModal}
            uploadCloseModal={this.uploadCloseModal}
          />
        </div>
        <div id='right-panel'>
          <Announcement announcement={this.state.announcement} />
          <div id='main-feature'>
            <CodeEditor
              schemaEntry={this.state.schemaEntry}
              data={this.state.queries}
              schemaName={this.state.schemaName}
              schemaChange={this.schemaChange}
              schemaSubmit={this.schemaSubmit}
              injectedCode={this.state.injectedCode}
              emptyInject={this.emptyInject}
            />
            <div id='queries-results-panel'>
              <div id='query-request'>
                <textarea
                  id='query-input'
                  onChange={this.queryChange}
                ></textarea>
                <button id='query-submit' onClick={this.querySubmit}>
                  Submit Query
                </button>
              </div>
              <Table queryTable={this.state.queryTable} />
              <LineGraph
                queries={this.state.queries}
                queryStatistics={this.state.queryStatistics}
                queryHistory={this.state.queryHistory}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
