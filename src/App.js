// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

// Routes
import AppRoutes from './routes';

/* react-dom needs React global variable in order to work on async funcion */
/* 
  NOTE: Parcel.js doesn't provide a clear way to add external dependencies 
  one point less for Parcel :/ 
*/ 

window.React = React;
const reactRender = ReactDOM.render;

// The main Component where the app is connected to the global state
let App = (
		<Router>
			<AppRoutes />
		</Router>
);

export function render() {
	// Generate the Node where the app will be rendered
	let appNode = document.createElement("DIV");
		appNode.id = "App";
		document.body.prepend(appNode);
  
	reactRender(App, appNode);
}