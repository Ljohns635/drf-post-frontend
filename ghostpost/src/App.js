import Boast from "./Boast"
import Roast from "./Roast"
import Create from "./Create"
import Home from "./Home"
import Popular from "./Popular"
import Navigation from "./Navigation"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/boast" component={Boast} />
          <Route path="/roast" component={Roast} />
          <Route path="/popular" component={Popular} />
          <Route path="/create" component={Create} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
