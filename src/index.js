import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import ServerDashboard from "./components/ServerDashboard";
import AppDashboard from "./components/AppDashboard";
import "bulma/css/bulma.css";
import "bulma-extensions/dist/css/bulma-extensions.min.css";
import "./style.css";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <div className="row">
        <div className="column has-background-info">
          <AppDashboard />
        </div>
        <div className="column has-background-black">
          <ServerDashboard />
        </div>
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
