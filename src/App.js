
import './App.css';
import Banner from './components/Banner';
import InfoArea from './components/InfoArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import LeagueDetails from './components/LeagueDetails';

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Banner></Banner>
          <InfoArea></InfoArea>
        </Route>
        <Route exact path="/details/:id">
          <LeagueDetails></LeagueDetails>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
