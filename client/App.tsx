import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
import { Provider } from "react-redux";
import store from "./store";


 const App:React.FC = (props) => {
    return (
      <Provider store = {store}>
         <MainContainer />  
      </Provider>
  )

} 

export default App;