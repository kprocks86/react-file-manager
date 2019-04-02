import React from "react";
import Tree from "./common/tree";
import { files } from "../constant";

class List extends React.Component {
  render() {
    return <Tree files={files} />;
  }
}

export default List;
