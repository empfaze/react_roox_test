import ReactDOM from "react-dom";
import "./styles/index.scss";
import { App } from "./components/App/App";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);