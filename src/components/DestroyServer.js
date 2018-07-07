import React from "react";
import { connect } from "react-redux";
import { destroyServer } from "../actions/servers";

export class DestroyServer extends React.Component {
  onClick = () => {
    //get the Id of the latest server
    const latestServerId = Math.max.apply(
      Math,
      this.props.servers.map(function(server) {
        return server.id;
      })
    );
    //filter out the latest server from the servers list
    const filteredServers = this.props.servers.filter(server => {
      return server.id !== latestServerId;
    });
    this.props.destroyServer(filteredServers);
  };
  render() {
    return (
      <div>
        <button
          className="button is-rounded is-danger is-small has-text-weight-bold is-size-6"
          onClick={this.onClick}
        >
          -
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  destroyServer: servers => dispatch(destroyServer(servers))
});

const mapStateToProps = state => {
  return {
    servers: state.servers
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DestroyServer);
