import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import XmlHttpRequestEx from "./apicrud/XmlHttpRequestEx";
import FetchEx from "./apicrud/FetchApiEx";
import AxiosEx from "./apicrud/AxiosEx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <XmlHttpRequestEx></XmlHttpRequestEx> */}
    {/* <FetchEx></FetchEx> */}
    <AxiosEx></AxiosEx>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
