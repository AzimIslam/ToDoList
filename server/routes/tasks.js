var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, task: "somebody"},
    {id: 2, task: "somebody else"}
  ]);
});

module.exports = router;
