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
import MenuBar from './Components/menu_bar';

function App({
  settings
}) {
  console.log(settings)
  return (
    <Router>
      <div className="App">
        <MenuBar />
        <Switch>
          <Route path="/settings">
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
