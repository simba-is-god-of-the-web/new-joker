const router = require("express").Router();
const verify =  require("../auth/verifyToken");

router.get('/', verify, function(req,res){
    res.render("room",{username: req.signedCookies.username});
});

module.exports = router;