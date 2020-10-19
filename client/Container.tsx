import React, { Component, SyntheticEvent } from 'react';
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
  onClose: any;
  schemaName: string;
  //sideBar
  url: string;
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

class Container extends Component<{}, ContainerState> {
  constructor(props: {}) {
    super(props);

    this.schemaChange = this.schemaChange.bind(this);
    this.schemaSubmit = this.schemaSubmit.bind(this);
    this.queryChange = this.queryChange.bind(this);
    this.querySubmit = this.querySubmit.bind(this);
    this.refresh = this.refresh.bind(this);
    this.connect = this.connect.bind(this);
    this.awsOpenModal = this.awsOpenModal.bind(this);
    this.awsCloseModal = this.awsCloseModal.bind(this);
    this.awsInfoChange = this.awsInfoChange.bind(this);
    this.infoOpenModal = this.infoOpenModal.bind(this);
    this.infoCloseModal = this.infoCloseModal.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
    this.fileUpdate = this.fileUpdate.bind(this);
    this.uploadOpenModal = this.uploadOpenModal.bind(this);
    this.uploadCloseModal = this.uploadCloseModal.bind(this);
  }

  state: ContainerState = {
    queries: [],
    queryStatistics: [],
    queryHistory: [],
    queryEntry: '',
    queryTable: [],
    announcement: 'Welcome to StratosDB Beta',
    schemaEntry: '',
    onClose: true,
    schemaName: '',
    url: '',
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

  componentDidMount() {
    console.log('component mounted');
    console.log('before axios');
    axios
      .get('/refresh')
      .then((result) => console.log(result))
      .catch((err) => console.error(err));
  }

  // UPDATING SCHEMA STATE DURING TYPING
  schemaChange(event: string) {
    console.log('EVENT: ', event);
    this.setState({
      schemaEntry: event,
    });
  }

  // SUBMITTING SCHEMA CODE TO BACKEND
  schemaSubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();

    console.log('state.queries before axios: ', this.state);

    const schemaObj: any = {
      schemaEntry: this.state.schemaEntry,
    };
    console.log('queryData', schemaObj);
    axios.post('/newSchema', schemaObj).then((data) => {
      console.log('explain data', data.data[0]);
      this.setState({ queries: data.data[0] });
      console.log('state after axios: ', this.state);
    });
  }

  // UPDATING QUERY STATE WHILE TYPING
  queryChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log('EVENT: ', event.target.value);
    this.setState({
      queryEntry: event.target.value,
    });
  }

  // SUBMITTING QUERY SEARCH TO BACKEND
  querySubmit(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    let historyArr: any = this.state.queryHistory;
    historyArr.push(this.state.queryEntry);
    this.setState({
      queryHistory: historyArr,
    });

    // console.log('state.queries before axios: ', this.state);

    // DIFFERENT OBJECT FOR QUERY ENTRY
    const queryObj: any = {
      queryEntry: this.state.queryEntry,
    };
    // console.log('queryData', queryObj);
    console.log('state before axios', this.state);
    let newArr: any = this.state.queryStatistics;
    axios.post('/results', queryObj).then((data) => {
      console.log('this is sparta', data);
      newArr = newArr.concat(data.data.queryStatistics[0]['Execution Time']);
      // console.log('newArr', newArr);
      console.log('explain data', data.data);
      this.setState({
        // queries: data.data[0],
        queryStatistics: newArr,
        queryTable: data.data.queryTable,
      });
      console.log('state after axios: ', this.state);
      // this.setState({
      //   queryStatistics: [this.state.queries['Execution Time']],
      // });
      // this.state.queryStatistics.push(this.state.queries['Execution Time']);
      // console.log('state after push: ', this.state);
      // console.log('BOOM', this.state.queryStatistics);
    });
  }

  // ESTABLISH CLOUD CONNECTION FUNCTION
  connect(event: React.MouseEvent<HTMLElement>) {
    event.preventDefault();
    console.log('in connect');
    // ADD THE PROPERTIES IN THE FORM INTO STATE BY USING SETSTATE
    console.log('state aws info: ', this.state.awsInfo);
    let info = this.state.awsInfo;
    // REMEMBER TO CHANGE THIS INTO A POST REQUEST ONCE WE GET THE ROUTE WORKING
    axios
      .post('/connect', info)
      .then(() => console.log('Success'))
      .catch((err) => console.log('There has been an error: ', err));

    // CLOSING MODAL
    this.setState({ awsModalIsOpen: false });
  }

  // SHOW POPUP CLOUD MODAL
  awsOpenModal: any = () => {
    this.setState({ awsModalIsOpen: true });
  };

  awsCloseModal() {
    this.setState({ awsModalIsOpen: false });
  }

  // SHOW POPUP INFO MODAL
  infoOpenModal: any = () => {
    this.setState({ infoModalIsOpen: true });
  };

  infoCloseModal() {
    this.setState({ infoModalIsOpen: false });
  }

  uploadOpenModal: any = () => {
    this.setState({ uploadModalIsOpen: true });
  };

  uploadCloseModal() {
    this.setState({ uploadModalIsOpen: false });
  }

  // UPDATING STATE TO LOCATION OF FILE
  fileUpdate(event: any) {
    const newFile = event.target.files[0];
    this.setState({ selectedFile: newFile });
    // READ FILE
    const reader = new FileReader();
    reader.onload = (event: any) => {
      console.log('entered file update > reader onload');
      const newText = event.target.result;
      const lines = newText.split(/\r\n|\n/);
      // SETTING STATE TO PERSIST INJECTED CODE
      this.setState({
        injectedCode: lines.join('\n'),
      });
    };

    reader.onerror = (event: any) => {
      console.log(event.target.error.name);
    };

    reader.readAsText(newFile);
  }

  // SENDING FILE TO BACKEND
  fileUpload() {
    console.log('upload has been clicked');
    console.log('state text: ', this.state.injectedCode);
    const newCode = this.state.injectedCode;
    this.setState({
      schemaEntry: newCode,
    });
    // const data = new FormData();
    // console.log('selected file: ', this.state.selectedFile);
    // data.append('myFile', this.state.selectedFile);
    // axios
    //   .post('/upload', data)
    //   .then((res) => console.log('upload status: ', res.statusText))
    //   .catch((err) => console.log('Error in file upload: ', err));
  }

  // CHANGING AWSINFO STATE
  awsInfoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { id, value } = e.target;
    let newAWS: any = { ...this.state.awsInfo };
    newAWS[id] = value;
    this.setState({ awsInfo: newAWS });
  }

  // possibly needs component did update
  refresh(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    window.location.reload(false);
    console.log('refreshing');
  }

  render() {
    return (
      <div id='main-container'>
        <div id='left-panel'>
          <Sidebar
            url={this.state.url}
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
              onClose={this.state.onClose}
              schemaName={this.state.schemaName}
              schemaChange={this.schemaChange}
              schemaSubmit={this.schemaSubmit}
              injectedCode={this.state.injectedCode}
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
              <div id='visual-data'>
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
      </div>
    );
  }
}

export default Container;
