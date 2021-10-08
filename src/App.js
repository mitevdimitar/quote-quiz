import './App.css';
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
    <div className={`App, ${classes.root}`}>
      <MenuBar />
      <Quiz />
    </div>
  );
}

export default App;
