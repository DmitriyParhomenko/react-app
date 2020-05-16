const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
}, {
	timestamps: true,
});

const About = mongoose.model('abouts', aboutSchema);

module.exports = About;