import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import NavBar from '../Components/Tracker/NavBar';
import ExercisesList from '../Components/Tracker/ExercisesList';
import EditExercise from '../Components/Tracker/EditExercise';
import CreateExercise from '../Components/Tracker/CreateExercise';
import CreateUser from '../Components/Tracker/CreateUser';

class Tracker extends Component {
	render() {
		return (
			<div>
				<Router>

					<NavBar />

					<Switch>
						<Route path="/tracker/exercises">
							<ExercisesList />
						</Route>
						<Route path="/tracker/edit/:id">
							<EditExercise />
						</Route>
						<Route path="/tracker/create">
							<CreateExercise />
						</Route>
						<Route path="/tracker/user">
							<CreateUser />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default Tracker;
