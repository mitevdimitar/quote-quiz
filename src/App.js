import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Settings from "./Pages/settings";
import Home from "./Pages/home";
import Quiz from "./Pages/quiz"
import MenuBar from './Components/menu_bar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "100vh"
    },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={`App, ${classes.root}`}>
        <MenuBar />
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
