import React, { Component } from "react";
import { withRouter } from "react-router";
import { folders } from "../constant";
import Tree from "./common/tree";

class Folder extends Component {
  state = {
    folders: []
  };

  componentWillMount = () => {
    const folder = folders.filter(
      folder => folder.id === this.props.match.params.id
    );
    this.setState({ folders: folder[0].files });
  };

  componentWillReceiveProps = nextProps => {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      const folder = folders.filter(
        folder => folder.id === nextProps.match.params.id
      );
      this.setState({ folders: folder[0].files });
    }
  };

  render() {
    return <Tree files={this.state.folders} />;
  }
}

export default withRouter(Folder);
