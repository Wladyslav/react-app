import React, { Component } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Nav from "./components/navigation/nav";
import StartPageView from "./pages/mainPage/startPageView/StartPageView";
import PrintersView from "./pages/printersView/PrintersView";
import MaterialsView from "./pages/materialsView/MaterialsView";

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
      <BrowserRouter>
        <>
          {isNavOpen && <Nav />}
          <Navbar openNav={this.openNav} />
          <Switch>
            <Route exact path="/" component={StartPageView} />
            <Route path="/printers" component={PrintersView} />
            <Route path="/materials" component={MaterialsView} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
export default App;
