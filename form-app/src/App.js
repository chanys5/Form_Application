import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home.js"
import GoLink from "./GoLink.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:code" component={GoLink}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
