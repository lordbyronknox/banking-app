import './App.css';
import Home from './pages/Home';
import UserHome from './pages/UserHome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>

        <Route exact path="/">
        <Home />
        </Route>

        <Route path="/userhome">
        <UserHome />
        </Route>


        </Switch>
      </div>
    </Router>



  );
}

export default App;
