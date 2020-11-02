import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import Home from "./client/Home/Home.jsx";
import Location from "./client/Location/Location.jsx";
import ThingsToDo from "./client/ThingsToDo/ThingsToDo.jsx";
import Party from "./client/Party/Party.jsx";
import Navigation from "./client/Components/Navigation/Navigation.jsx";
import Sidebar from "./client/Components/Sidebar/Sidebar.jsx";
import ScrollToTop from "./client/Components/ScrollToTop/ScrollToTop.jsx";
import { IconButton } from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import FavoriteContext from "./FavoriteContext.js";
import appTheme from "./AppTheme.js";

export default function App() {
  const [displaySidebar, setDisplaySideBar] = useState(false);
  const favoriteHook = useState(
    JSON.parse(localStorage.getItem("myFavorites")) || []
  );

  return (
    <FavoriteContext.Provider value={favoriteHook}>
      <ThemeProvider theme={appTheme}>
        <Router>
          <ScrollToTop />
          <header>
            <link
              href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Tangerine&display=swap"
              rel="stylesheet"
            />
          </header>
          <div className="App">
            {displaySidebar ? (
              <Sidebar toggleSidebar={setDisplaySideBar} />
            ) : (
              ""
            )}
            <div className="header">
              <div className="header-content">
                <a href="/" className="logo">
                  Angie &amp; Garrett
                </a>
                <Navigation toggleSidebar={setDisplaySideBar} />
                <IconButton
                  color="inherit"
                  aria-label="menu"
                  className="hamburger"
                  size="small"
                  onClick={() => setDisplaySideBar(true)}
                >
                  <Menu />
                </IconButton>
              </div>
            </div>

            <Switch>
              <Route path="/party-with-us">
                <Party />
              </Route>
              <Route path="/when-and-where">
                <Location />
              </Route>
              <Route path="/things-to-do">
                <ThingsToDo />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    </FavoriteContext.Provider>
  );
}
