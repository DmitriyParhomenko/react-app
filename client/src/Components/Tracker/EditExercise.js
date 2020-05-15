import React, {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import {Button, Col, Container, Form, Row} from 'bootstrap-4-react';

class EditExercise extends Component {
	state = {
		username: '',
		description: '',
		duration: 0,
		date: new Date(),
		users: []
	};

	componentDidMount() {
		const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';
		axios.get(url + '/exercises/' + this.props.match.params.id)
			.then(response => {
				this.setState({
					username: response.data.username,
					description: response.data.description,
					duration: response.data.duration,
					date: new Date(response.data.date),
				});
			})
			.catch(function (error) {
				console.log(error);
			});

		axios.get(url + '/users')
			.then(response => {
				if (response.data.length > 0) {
					this.setState({
						users: response.data.map(user => user.username),
						username: response.data[0].username
					});
				}
			});
	}

	onChangeUsername = e => {
		this.setState({
			username: e.target.value,
		});
	};

	onChangeDescription = e => {
		this.setState({
			description: e.target.value,
		});
	};

	onChangeDuration = e => {
		this.setState({
			duration: e.target.value,
		});
	};

	onChangeDate = date => {
		this.setState({
			date: date,
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const exercise = {
			username: this.state.username,
			description: this.state.description,
			duration: this.state.duration,
			date: this.state.date
		};

		console.log(exercise);

		const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';

		axios.post(url + '/exercises/update/' + this.props.match.params.id, exercise)
			.then(res => console.log(res.data));

		this.setState({
			description: '',
			duration: 0
		});
	};

	render() {
		return (
			<Container className="form-comment">
				<Row justifyContent="sm-center">
					<Col sm="6">
						<h3>Edit New Exercise Log</h3>
						<Form onSubmit={this.onSubmit}>
							<Form.Group>
								<label>Username: </label>
								<select ref="userInput"
									required
									className="form-control"
									value={this.state.username}
									onChange={this.onChangeUsername}>
									{
										this.state.users.map(function (user) {
											return <option
												key={user}
												value={user}>
												{user}
											</option>;
										})
									}
								</select>
							</Form.Group>
							<Form.Group>
								<label htmlFor="title-new-descr">Description:</label>
								<Form.Input
									id="title-new-descr"
									type="text"
									required
									className="form-control"
									value={this.state.description}
									onChange={this.onChangeDescription}
								/>
							</Form.Group>
							<Form.Group>
								<label htmlFor="title-edit-time">Duration (in minutes):</label>
								<Form.Input
									id="title-edit-time"
									type="text"
									required
									className="form-control"
									value={this.state.duration}
									onChange={this.onChangeDuration}
								/>
							</Form.Group>
							<Form.Group>
								<label>Date: </label>
								<div>
									<DatePicker
										selected={this.state.date}
										onChange={this.onChangeDate}
									/>
								</div>
							</Form.Group>
							<Button outline dark my="2 sm-0">Edit Exercise Log</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default EditExercise;