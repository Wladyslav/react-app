import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Nav from "./components/navigation/nav";
import StartPageView from "./pages/mainPage/startPageView/StartPageView";
import PrintersView from "./pages/printersView/PrintersView";
import MaterialsView from "./pages/materialsView/MaterialsView";
import DevicesView from "./pages/devicesView/DevicesView";
import ArticlesView from "./pages/articlesView/ArticlesView";
import ServiceView from "./pages/serviceView/ServiceView";

class App extends Component {
  state = {
    isNavOpen: false,
  };
  openNav = () => {
    this.setState((prevState) => ({
      isNavOpen: !prevState.isNavOpen,
    }));
  };
  render() {
    const { isNavOpen } = this.state;

    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <>
          <Nav navStatus={isNavOpen} />
          <Navbar openNav={this.openNav} navStatus={isNavOpen} />
          <Switch>
            <Route exact path="/" component={StartPageView} />
            <Route path="/printers" component={PrintersView} />
            <Route path="/materials" component={MaterialsView} />
            <Route path="/devices" component={DevicesView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/service" component={ServiceView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
export default App;
