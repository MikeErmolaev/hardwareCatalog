import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createHashHistory from 'history/lib/createBrowserHistory';
import appContainer from './app_container';
import home from './home';

const targetEl = document.getElementById('app-wrapper');

ReactDOM.render(
	<Router history = { createHashHistory() }>
		<Route path = "/" component = { appContainer }>
			<IndexRoute component = { home }/> 
			<Route path = "/categories/:" component = {  }/>
		</Route>
	</Router>,
	targetEl
);