import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";  

export default function Navigation({ toggleSidebar }) {
  return (
    <ul className="navigation">
      <li>
        <NavLink exact to="/" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Our Story</NavLink>
      </li>
      <li>
        <NavLink to="/when-and-where" activeClassName="is-active" onClick={() => toggleSidebar(false)}>When &amp; Where</NavLink>
      </li>
      <li>
        <NavLink to="/things-to-do" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Things To Do</NavLink>
      </li>
      <li>
        <NavLink to="/party-with-us" activeClassName="is-active" onClick={() => toggleSidebar(false)}>Party With Us</NavLink>
      </li>
      <li>
        <a href="https://www.zola.com/registry/angieandgarrett" target="_blank" rel="noopener noreferrer" onClick={() => toggleSidebar(false)}>Registry</a>
      </li>
    </ul>
  );
}
