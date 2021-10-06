import './App.css';
import { connect } from "react-redux";
import { mapStateToProps } from './services/redux';

function App({
  settings
}) {
  console.log(settings)
  return (
    <div className="App">
      My app
    </div>
  );
}

export default connect(mapStateToProps/* , mapDispatchToProps */)(App);
