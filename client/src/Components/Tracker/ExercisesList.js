import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const Exercise = props => {
	return (
		<tr>
			<td>{props.exercise.username}</td>
			<td>{props.exercise.description}</td>
			<td>{props.exercise.duration}</td>
			<td>{props.exercise.date.substring(0, 10)}</td>
			<td>
				<Link to={'/tracker/edit/' + props.exercise._id}> edit </Link> |
				<button onClick={() => {
					props.deleteExercise(props.exercise._id);
				}}>delete</button>
			</td>
		</tr>
	);
};

Exercise.propTypes = {
	exercise: PropTypes.object,
	deleteExercise: PropTypes.func,
};

class ExercisesList extends Component {
	state = {
		exercises: [],
	};

	componentDidMount() {
		const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';
		axios.get(url + '/exercises/')
			.then(response => {
				this.setState({
					exercises: response.data
				});
			})
			.catch(erorr => {
				console.log(erorr);
			});
	}

	deleteExercise = id => {
		const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';
		axios.delete(url + '/exercises/' + id)
			.then(res => console.log(res.data));

		this.setState({
			exercises: this.state.exercises.filter(el => el._id !== id)
		});
	};

	exerciseList = () => {
		return this.state.exercises.map(currentExercise => {
			return <Exercise
				exercise={currentExercise}
				deleteExercise={this.deleteExercise}
				key={currentExercise._id}
			/>;
		});
	};

	render() {
		return (
			<div>
				<h3>Logged Exercises</h3>
				<table className="tabel">
					<thead className="thead-light">
						<tr>
							<th>Username</th>
							<th>Description</th>
							<th>Duration</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						 { this.exerciseList() }
					</tbody>
				</table>
			</div>
		);
	}
}

export default ExercisesList;