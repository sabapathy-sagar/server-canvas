import React from "react";
import { connect } from "react-redux";
import { startInstance, killInstance } from "../actions/apps";

export class AppListItem extends React.Component {
  onAddClick = () => {
    const firstServerRunningZeroApps = () => {
      return this.props.servers.find(server => server.appsRunning.length === 0);
    };

    const firstServerRunningOneApp = () => {
      return this.props.servers.find(server => {
        return server.appsRunning.length === 1;
      });
    };

    //get the first server running 0 apps, if all servers are running at least 1 app
    //then get the first server running only 1 app.
    const getServer = () => {
      return firstServerRunningZeroApps() || firstServerRunningOneApp();
    };
    //if all servers are running 2 apps, the app should not be instantiated.
    if (getServer()) {
      this.props.startInstance(
        {
          id: this.props.id,
          name: this.props.name,
          isRunning: true
        },
        getServer()
      );
    }
  };

  onKillClick = () => {
    const getTheServerWithAppInstance = appName => {
      return this.props.servers
        .filter(server => server.appsRunning.length > 0)
        .find(server => server.appsRunning[0].name === appName);
    };

    this.props.killInstance(
      {
        id: this.props.id,
        name: this.props.name,
        isRunning: false
      },
      getTheServerWithAppInstance(this.props.name)
    );
  };
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <button className="button is-success" onClick={this.onAddClick}>
          +
        </button>
        <button className="button is-warning" onClick={this.onKillClick}>
          -
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startInstance: (app, store) => dispatch(startInstance(app, store)),
  killInstance: (app, store) => dispatch(killInstance(app, store))
});

const mapStateToProps = state => {
  return {
    servers: state.servers,
    apps: state.apps
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppListItem);
