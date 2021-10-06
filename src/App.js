import './App.css';
import { connect } from "react-redux";
import { mapStateToProps } from './services/redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Settings from "./Pages/settings";
import Home from "./Pages/home";

function App({
  settings
}) {
  console.log(settings)
  return (
    <Router>
      <div className="App">
        My app
        <Switch>
          <Route path="/login">
            <Settings />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default connect(mapStateToProps/* , mapDispatchToProps */)(App);
