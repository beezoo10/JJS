import React from "react";
import ReactDom from "react-dom";
import App from "../client/components/App.jsx"
// don't uncomment!!
import styles from './scss/application.scss';
// import mongoURI from './.env'

ReactDom.render(<App />, document.getElementById("root"));
