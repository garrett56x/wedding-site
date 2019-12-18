import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";  

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="navigation">
        <li>
          <NavLink to="/home" activeClassName="is-active" onClick={ () => this.props.toggleSidebar(false) }>Our Story</NavLink>
        </li>
        <li>
          <NavLink to="/when-and-where" activeClassName="is-active" onClick={ () => this.props.toggleSidebar(false) }>When & Where</NavLink>
        </li>
        <li>
          <NavLink to="/things-to-do" activeClassName="is-active" onClick={ () => this.props.toggleSidebar(false) }>Things To Do</NavLink>
        </li>
        <li>
          <a href="https://www.zola.com/registry/angieandgarrett" target="_blank" onClick={ () => this.props.toggleSidebar(false) }>Registry</a>
        </li>
      </ul>
    );
  }
}

export default Navigation;
