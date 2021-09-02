import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';

const App = () => {
	return (
		<div>
        <h1>Welcome to BookStore</h1>
			<Router>
				<Link to="/books">Books</Link>
				<Link to="/categories">Categories</Link>
				<Switch>
					<Route path="/books" >
						<Books />
					</Route>
					<Route path="/categories" >
						<Categories />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};
export default App;
