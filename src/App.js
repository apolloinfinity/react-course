import { Route, Switch } from 'react-router-dom'; // THe Route's job is to define to define different paths in the url and which component should be loaded with those paths
import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';

function App() {
	return (
		<div>
			<Switch>
				<Route path='/' exact>
					<AllMeetUpsPage />
				</Route>
				<Route path='/new-meetup'>
					<NewMeetUpPage />
				</Route>
				<Route path='/favorites'>
					<FavoritesPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
// React Router will match the url path. So even if you do change it to a different URL segment, such as '/new-meetup', React will stop looking after '/' is matched because it partially matches it.
// First Route should have exact to tell Router that the first route must be matched exactly. That is why it is only necessary as far as this tutorial is concerned, to put 'exact' on the first path'
