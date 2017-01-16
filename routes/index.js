var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.use(express.static('punlic','blank-page.html' ));
  next();
});

module.exports = router;
