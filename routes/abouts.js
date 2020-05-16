const router = require('express').Router();
let Abouts = require('../models/about.model');

router.route('/').get((req, res) => {
	Abouts.find()
		.then(about => res.json(about))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
	const username = req.body.username;
	const description = req.body.description;

	const newAbout = new Abouts({
		username,
		description,
	});

	newAbout.save()
		.then(() => res.json('About Us added!'))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
	Abouts.findById(req.params.id)
		.then(about => res.json(about))
		.catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
	Abouts.findByIdAndDelete(req.params.id)
		.then(() => res.json('About Us deleted'))
		.catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;