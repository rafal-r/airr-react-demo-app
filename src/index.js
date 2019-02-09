import React from "react";
import ReactDOM from "react-dom";
import "airr-react/dist/airr-react.css";
import "./app.css";
import App from "./App";

//when using Cordova for mobile apps, wait for device to be ready and then render
if (window.cordova) {
  document.addEventListener("deviceready", function() {
    ReactDOM.render(<App />, document.getElementById("root"));
  });
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
