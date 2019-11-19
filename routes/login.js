const router = require('express').Router();
const verify = require('../auth/verifyToken.js');

router.get('/', (req, res, next) => {
	res.render('login');	
});

module.exports = router;
