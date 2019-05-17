import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';

import NavBarContainer from "./NavBar/NavBarContainer";
import Footer from "./Footer/Footer";
import LoginContainer from "./Login/LoginContainer";
import Dashboard from "./Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Route path="/" component={NavBarContainer} />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/login" component={LoginContainer} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
