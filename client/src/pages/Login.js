import React, {useState, useContext} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message/Message';
import {AuthContext} from '../Context/AuthContext';
import {Button, Col, Container, Form, Row} from 'bootstrap-4-react';

const Login = props => {
	const [user, setUser] = useState({
		username: '',
		password: ''
	});
	const [message, setMessage] = useState(null);
	const authContext = useContext(AuthContext);

	const onChange = e => {
		setUser({...user,[e.target.name] : e.target.value});
	};

	const onSubmit = e => {
		e.preventDefault();
		AuthService.login(user).then(data => {
			console.log(data);
			const { isAuthenticated, user, message } = data;
			if(isAuthenticated) {
				authContext.setUser(user);
				authContext.setIsAuthenticated(isAuthenticated);
				props.history.push('/todos');
			}
			else
				setMessage(message);
		});
	};

	return (
		<Container className="form-comment">
			<Row justifyContent="sm-center">
				<Col sm="6">
					<h3>Please sign in</h3>
					<Form onSubmit={onSubmit}>
						<Form.Group>
							<label htmlFor="username">Username:</label>
							<Form.Input
								name="username"
								type="text"
								className="form-control"
								onChange={onChange}
								placeholder="Enter Username"
							/>
						</Form.Group>
						<Form.Group>
							<label htmlFor="password">Password:</label>
							<Form.Input
								name="password"
								type="password"
								className="form-control"
								onChange={onChange}
								placeholder="Enter Password"
							/>
						</Form.Group>
						<Button outline dark my="2 sm-0">Log in</Button>
					</Form>
					{message ? <Message message={message}/> : null}
				</Col>
			</Row>
		</Container>
	);
};

export default Login;