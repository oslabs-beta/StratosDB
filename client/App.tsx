import React, { Component } from "react";
import MainContainer from "./containers/MainContainer";
import { Provider } from "react-redux";



 const App:React.FC = (props) => {
    return (
      <Provider store = {store}>
  <App/>  
</Provider>
  )

} 

export default App;