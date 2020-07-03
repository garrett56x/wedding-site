import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import "./Sidebar.css";
import { IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="close-sidebar">
          <IconButton aria-label="close" className="close" size="small" onClick={ () => this.props.toggleSidebar(false) }>
            <Close fontSize="inherit" />
          </IconButton>
        </div>
        <Navigation toggleSidebar={this.props.toggleSidebar} />
      </div>
    );
  }
}

export default Sidebar;
