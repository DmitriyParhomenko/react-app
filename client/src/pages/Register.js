import React, {useState, useRef, useEffect} from 'react';
import AuthService from '../Services/AuthService';
import Message from '../Components/Message/Message';
import {Button, Col, Container, Form, Row} from 'bootstrap-4-react';

const Register = props => {
	const [user, setUser] = useState({
		username: '',
		password: '',
		role: ''
	});
	const [message, setMessage] = useState(null);
	let timerID = useRef(null);

	useEffect(() => {
		return () => {
			clearTimeout(timerID);
		};
	},[]);

	const onChange = e => {
		setUser({...user,[e.target.name] : e.target.value});
	};

	const resetForm = () => {
		setUser({username: '', password: '', role: ''});
	};

	const onSubmit = e => {
		e.preventDefault();
		AuthService.register(user).then(data => {
			const { message } = data;
			setMessage(message);
			resetForm();
			if(!message.msgError) {
				timerID = setTimeout(() => {
					props.history.push('/login');
				}, 2000);
			}
		});
	};

	return (
		<Container className="form-comment">
			<Row justifyContent="sm-center">
				<Col sm="6">
					<h3>Please Register</h3>
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
						<Form.Group>
							<label htmlFor="role">Role:</label>
							<Form.Input
								name="role"
								type="text"
								className="form-control"
								onChange={onChange}
								placeholder="Enter Role (admin/user)"
							/>
						</Form.Group>
						<Button outline dark my="2 sm-0">Register</Button>
					</Form>
					{message ? <Message message={message}/> : null}
				</Col>
			</Row>
		</Container>
	);
};

export default Register;