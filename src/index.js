import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App/App";
import "./index.css";

// import react-router-dom
import { BrowserRouter as Router } from "react-router-dom";

// import context
import { RoomProvider } from "./Context/Context";
import { StateProvider } from "./Context/StateProvider";
import reducer, { initialState } from "./reducer";

ReactDOM.render(
  <RoomProvider>
    <StateProvider initialState={initialState} reducer={reducer}>
      <Router>
        <App />
      </Router>
    </StateProvider>
  </RoomProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
