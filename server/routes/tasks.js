const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../db/data.db')
var express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

router.use(bodyParser.json());

// Database connection
const db = new sqlite3.Database(dbPath, (err) => {
  if(err) {
    console.error(err.message);
  }
  console.log("Connected to SQLite database");
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Iterates over tasks and push them as objects to tasks array
  db.all("SELECT id, task FROM tasks ORDER BY id DESC", function (err, results) {
    if(err) {
      console.error(err);
    }
    res.send(results);
  });
});

router.post('/add', function(req, res, next) {
  console.log(req.body.task)
  db.run(`INSERT INTO tasks(task) VALUES($task)`, {
    $task: req.body.task
  });
  db.get("SELECT id FROM tasks ORDER BY id DESC LIMIT 1", function(err, row) {
    if(err) {
      console.log(err)
    }
    res.send(row.id);
  });
});


module.exports = router;
