import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Friend from './Components/Friend/Friend';
import Friends from './Components/Friends/Friends';
import NotFound from './Components/NotFound/NotFound';
import About from './Components/About/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import FriendDetails from './Components/FriendDetails/FriendDetails';


function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/friend/:friendId">
            <FriendDetails></FriendDetails>
          </Route>
          <Route path="/friends">
            <Friends></Friends>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
