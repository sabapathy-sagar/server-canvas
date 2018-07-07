import React from "react";
import { connect } from "react-redux";
import AppListItem from "./AppListItem";

export const AppList = props => (
  <div>
    {props.apps.length === 0 ? (
      <p>No Apps</p>
    ) : (
      props.apps.map(app => {
        return <AppListItem key={app.id} {...app} />;
      })
    )}
    <br />
  </div>
);

const mapStateToProps = state => {
  return {
    apps: state.apps
  };
};

export default connect(mapStateToProps)(AppList);
