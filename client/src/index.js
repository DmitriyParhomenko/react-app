import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './Context/AuthContext';

ReactDOM.render(
	<AuthProvider>
		<App />
	</AuthProvider>,
	// eslint-disable-next-line no-undef
	document.getElementById('root')
);
