import './App.css';
import Home from './components/Home/Home';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	
  } from "react-router-dom";
import ShowTeam from './ShowTeam/ShowTeam';
  
function App() {
	return (
		<div>
			<Router>			
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path ="/home">
							<Home/>
						</Route>
						<Route path="/showTeam/:idTeam">
							<ShowTeam/>							
						</Route>
					</Switch>

			</Router>
		</div>
	);
}

export default App;
