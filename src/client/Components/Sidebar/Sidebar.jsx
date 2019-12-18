import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import "./Sidebar.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar">
        <div className="close-sidebar">
          <div className="close" onClick={ () => this.props.toggleSidebar(false) }>
            X
          </div>
        </div>
        <Navigation toggleSidebar={this.props.toggleSidebar} />
      </div>
    );
  }
}

export default Sidebar;
