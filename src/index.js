import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './scss/index.scss';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);