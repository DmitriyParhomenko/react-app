import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavBar from '../Components/Tracker/NavBar';
import ExercisesList from '../Components/Tracker/ExercisesList';
import EditExercise from '../Components/Tracker/EditExercise';
import CreateExercise from '../Components/Tracker/CreateExercise';
import CreateUser from '../Components/Tracker/CreateUser';

class Tracker extends Component {
	render() {
		return (
			<Router>
				<NavBar />
				<br />
				<Route path="/exercises" exact component={ExercisesList} />
				<Route path="/edit/:id" component={EditExercise} />
				<Route path="/create" component={CreateExercise} />
				<Route path="/user" component={CreateUser} />
			</Router>
		);
	}
}

export default Tracker;
