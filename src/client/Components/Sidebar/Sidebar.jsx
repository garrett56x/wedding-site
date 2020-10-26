import React from "react";
import Navigation from "../Navigation/Navigation.jsx";
import "./Sidebar.css";
import { IconButton } from "@material-ui/core";
import Close from "@material-ui/icons/Close";

export default function Sidebar({ toggleSidebar }) {
  return (
    <div className="sidebar">
      <div className="close-sidebar">
        <IconButton aria-label="close" className="close" size="small" onClick={ () => toggleSidebar(false) }>
          <Close fontSize="inherit" />
        </IconButton>
      </div>
      <Navigation toggleSidebar={toggleSidebar} />
    </div>
  );
}
