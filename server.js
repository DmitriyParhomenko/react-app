const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

const uri = process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log('MongoDB database connection established successfully');
});

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const aboutsRouter = require('./routes/abouts');
const usersLoginRouter = require('./routes/userslogin');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/abouts', aboutsRouter);
app.use('/users-login', usersLoginRouter);

if (process.env.NODE_ENV === 'prodaction') {
	app.use(express.static('client/build'));

	// Express serve up index.html file if it doesn't recognize route
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});