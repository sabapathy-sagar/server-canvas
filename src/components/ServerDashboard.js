import React from "react";
import ServerList from "./ServerList";
import AddServer from "./AddServer";
import DestroyServer from "./DestroyServer";

const ServerDashboard = () => (
  <div>
    <p className="has-text-white has-text-weight-bold is-size-4">Servers</p>
    <AddServer />
    <DestroyServer />
    <ServerList />
  </div>
);

export default ServerDashboard;
