const router = require('express').Router();

router.get('/', (req, res, next) => {
	res.send(req.cookie);
});

module.exports = router;
