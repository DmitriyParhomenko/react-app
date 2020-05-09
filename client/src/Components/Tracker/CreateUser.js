import React, { Component } from 'react';
import axios from 'axios';

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

		const url = process.env.SITE_URI || 'http://localhost:5000';

		console.log(user);

		axios.post(url + '/users/add', user)
			.then(res => console.log(res.data));

		this.setState({
			username: '',
		});
	};

	render() {
		return (
			<div>
				<h3>Create New User</h3>
				<form onSubmit={this.onSubmit}>
					<div className="from-group">
						<label>Username: </label>
						<input
							type="text"
							required
							className="form-control"
							value={this.state.username}
							onChange={this.onChangeUsername}
						/>
					</div>
					<div className="form-group">
						<input
							type="submit"
							value="Create User"
							className="btn btn-ptimary"
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateUser;