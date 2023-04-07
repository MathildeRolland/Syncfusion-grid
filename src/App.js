import './App.css';

import { Switch, Route } from 'react-router-dom';
import Grid from './pages/Grid';
import Other from './pages/Other';

function App() {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/' component={Grid} />
				<Route path='/other' exact component={Other} />
			</Switch>
		</div>
	);
}

export default App;
