import React from "react";

const ServerListItem = props => (
  <div className="has-background-white has-text-white">
    <div>{props.id}</div>
    {props.appsRunning.map(app => (
      <div>
        {app.isRunning && <div className="has-text-black">{app.name}</div>}
      </div>
    ))}
  </div>
);

export default ServerListItem;
