const router = require('express').Router();
const verify = require('../auth/verifyToken.js');

router.get('/', (req, res, next) => {
	res.send(req.signedCookies['auth-token']);
});

router.get('/verify', verify, (req, res, next) => {
	res.send('welcome');	
});

router.get('/verify', (req, res, next) => {
	res.send('token no match');
})

module.exports = router;
