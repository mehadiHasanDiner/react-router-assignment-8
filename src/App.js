import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'
import NoMatch from './pages/NoMatch'
import LeagueDetails from './pages/LeagueDetails'

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/">
        <Home/>
       </Route>
       <Route path ="/home">
         <Home/>
       </Route>
        <Route exact path='/:id' children={<LeagueDetails/>}/>
        <Route path ="*">
          <NoMatch/>
        </Route>
     </Switch>
   </Router>
  );
}

export default App;
