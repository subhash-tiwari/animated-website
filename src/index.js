import React from "react";
import  ReactDOM from "react-dom";
import { BrowserRouter} from "react-router-dom";
import "./index.css";
import Apps from "./Apps";
ReactDOM.render(
    <BrowserRouter>
    <Apps />
    </BrowserRouter>
,
document.getElementById("root"));