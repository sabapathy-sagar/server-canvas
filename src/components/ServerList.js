import React from "react";
import { connect } from "react-redux";
import ServerListItem from "./ServerListItem";

export const ServerList = props => (
  <div>
    {props.servers.length === 0 ? (
      <p className="has-text-danger">No Servers</p>
    ) : (
      props.servers.map(server => {
        return (
          <div>
            <ServerListItem key={server.id} {...server} />
            <br />
          </div>
        );
      })
    )}
  </div>
);

const mapStateToProps = state => {
  return {
    servers: state.servers
  };
};

export default connect(mapStateToProps)(ServerList);
