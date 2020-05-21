const router = require('express').Router();
let UserLogin = require('../models/userlogin.model');

router.route('/').get((req, res) => {
	UserLogin.find()
		.then(userslogin => res.json(userslogin))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	const role = req.body.role;

	const newUser = new UserLogin({
		username,
		password,
		role
	});

	newUser.save()
		.then(() => res.json('User login added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;