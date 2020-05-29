import React, {useContext} from 'react';
import { AuthContext } from './Context/AuthContext';
import './App.scss';
import Header from './Components/Header/Header';

function App() {
	const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
	console.log(user);
	console.log(isAuthenticated);
	return (
		<div>
			<Header />
		</div>
	);
}

export default App;
