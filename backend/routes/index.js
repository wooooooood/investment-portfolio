var express = require('express');
var path = require('path');
var router = express.Router();

let resPath = path.join(__dirname, "../../");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(resPath + "/frontend/build", "index.html"));
});

module.exports = router;
