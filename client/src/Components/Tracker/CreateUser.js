import React, { Component } from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, Row} from 'bootstrap-4-react';

class CreateUser extends Component {
	state = {
		username: '',
	};

	onChangeUsername = e => {
		this.setState({
			username: e.target.value,
		});
	};

	onSubmit = e => {
		e.preventDefault();

		const user = {
			username: this.state.username,
		};

		const url = process.env.REACT_APP_API_URL || 'http://localhost:5000';

		console.log(user);

		axios.post(url + '/users/add', user)
			.then(res => console.log(res.data));

		this.setState({
			username: '',
		});
	};

	render() {
		return (
			<Container className="form-comment">
				<Row justifyContent="sm-center">
					<Col sm="6">
						<h3>Create New User</h3>
						<Form onSubmit={this.onSubmit}>
							<Form.Group>
								<label htmlFor="title-new-user">Username:</label>
								<Form.Input
									id="title-new-user"
									type="text"
									required
									className="form-control"
									value={this.state.username}
									onChange={this.onChangeUsername}
								/>
							</Form.Group>
							<Button outline dark my="2 sm-0">Create User</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default CreateUser;