import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./client/Home/Home.jsx";
import Location from "./client/Location/Location.jsx";
import ThingsToDo from "./client/ThingsToDo/ThingsToDo.jsx";
import Party from "./client/Party/Party.jsx";
import Navigation from "./client/Components/Navigation/Navigation.jsx";
import Sidebar from "./client/Components/Sidebar/Sidebar.jsx";
import ScrollToTop from "./client/Components/ScrollToTop/ScrollToTop.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySidebar: false,
    };
  }

  render() {
    return (
      <Router>
        <ScrollToTop />
        <header>
          <link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway|Tangerine&display=swap" rel="stylesheet" />
        </header>
        <div className="App">
          { this.state.displaySidebar ? <Sidebar toggleSidebar={this.toggleSidebar} /> : "" }
          <div className="header">
            <div className="header-content">
              <a href="/" className="logo">Angie & Garrett</a>
              <Navigation toggleSidebar={this.toggleSidebar} />
              <div className="hamburger" onClick={ () => this.toggleSidebar(true) }>
                <div></div>
                <div></div>
                <div></div>
              </div>
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
    );
  }

  toggleSidebar = (visible) => {
    this.setState({ displaySidebar: visible });
  }
}

export default App;
