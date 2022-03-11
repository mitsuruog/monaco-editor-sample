import * as React from "react";
import * as ReactDOM from "react-dom";

import { Editor } from "./components/Editor";
import "./workers/useWorker";

import "./index.css";

ReactDOM.render(<Editor />, document.getElementById("root"));
