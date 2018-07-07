import React from "react";
import { connect } from "react-redux";
import { addServer } from "../actions/servers";

export class AddServer extends React.Component {
  onClick = () => {
    this.props.addServer();
  };
  render() {
    return (
      <div>
        <button
          className="button is-rounded is-success is-small has-text-weight-bold is-size-6"
          onClick={this.onClick}
        >
          +
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addServer: () => dispatch(addServer())
});

export default connect(undefined, mapDispatchToProps)(AddServer);
