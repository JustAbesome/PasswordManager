var express = require('express'),
	router = express.Router(),
	Password = require('../models/Password'),
	ObjectID = require('mongodb').ObjectID,
	render = require('../renderer.js');

router.get('/', (req, res) => {
	Password.find({}, (err, passwords) => {
		res.render('pages/home',{
			title: 'Home',
			name: 'home',
			passwords: passwords
		})	
	})
});

router.get('/add', (req, res) => {
	res.render('pages/add',{
		title: 'Add Password',
		name: 'add'
	})
});

router.get('/password/:id', (req,res) => {
	Password.findOne({ _id: ObjectID(req.params.id) }, (err, password) => {
		if(err){ res.send(err); }
		else {
			render(res, 'password', {password: password})
		}
	})
})

module.exports = router;