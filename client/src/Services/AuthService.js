export default {
	login: user => {
		// eslint-disable-next-line no-undef
		return fetch('/user/login', {
			method: 'post',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			if(res.status !== 401)
				return res.json().then(data => data);
			else
				return {
					isAuthenticated: false,
					user: {
						username: '',
						role: ''
					}
				};
		});
	},
	register: user => {
		// eslint-disable-next-line no-undef
		return fetch('/user/register', {
			method: 'post',
			body: JSON.stringify(user),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => res.json())
			.then(data => data);
	},
	logout: () => {
		// eslint-disable-next-line no-undef
		return fetch('/user/logout')
			.then(res => res.json())
			.then(data => data);
	},
	isAuthenticated: () => {
		// eslint-disable-next-line no-undef
		return fetch('/user/authenticated')
			.then(res => {
				if(res.status !== 401)
					return res.json().then(data => data);
				else
					return {
						isAuthenticated: false,
						user: {
							username: '',
							role: ''
						}
					};
			});
	}
};