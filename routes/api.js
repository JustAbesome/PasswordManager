var express = require('express'),
	router = express.Router(),
	Password = require('../models/Password'),
	render = require('../renderer');

router.get('/', (req, res) => {
	Password.find((err, passwords) => {
		if(err) { res.send(err); }
		else 	{ res.json(passwords); }
	})
});

router.post('/', (req, res) => {
	Password.create({
		site: req.body.site,
		email: req.body.email,
		password: req.body.password
	}, (err, password) => {
		// if(err) { 
		// 	Password.find({}, (err, passwords) => {
		// 		render(res, 'home', {
		// 			negativeAlert: "Error, please contact an admin...",
		// 			passwords: passwords
		// 		});
		// 	});
		// }
		// else {
		// 	Password.find({}, (err, passwords) => {
		// 		render(res, 'home', {
		// 			positiveAlert: "Password for " + password.site + " succesfully added",
		// 			passwords: passwords
		// 		});
		// 	});
		// }
		if(err)
			throw err;
		else
			res.redirect('/')
	});
})

router.delete('/:id', (req, res) => {
	Password.deleteOne({
		_id: req.params.id
	}, (err, password) => {
		// if(err) {
		// 	Password.find({}, (err, passwords) => {
		// 		render(res, 'home', {
		// 			negativeAlert: "Error, please contact an admin...",
		// 			passwords: passwords
		// 		});
		// 	});
		// }
		// else { 
		// 	Password.find({}, (err, passwords) => {
		// 		render(res, 'home', {
		// 			positiveAlert: "Password succesfully removed",
		// 			passwords: passwords
		// 		});
		// 	});
		// }
		if(err)
			throw err;
		else
			res.json('succes')
	})
})

router.get('/:id', (req,res) => {
	Password.findOne({ _id: req.params.id }, (err, password) => {
		if(err)
			res.json(err);
		else
			res.json(password);
	});
});

module.exports = router;