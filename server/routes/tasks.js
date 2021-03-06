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

router.post('/', function(req, res) {
  db.run(`INSERT INTO tasks(task) VALUES($task)`, {
    $task: req.body.task
  });
  db.get("SELECT id FROM tasks ORDER BY id DESC LIMIT 1", function(err, row) {
    console.log(row);
    if(err) {
      console.log(err)
    } else {
      res.send({id: row.id});
    }
  });
});

router.put("/:id", function (req, res) {
  db.run("UPDATE tasks SET task=$task WHERE id=$id", {
    $id: req.params.id,
    $task: req.body.newTask
  }, (err) => {
    if(err) {
      console.error(err);
      res.status(400).send();
      return;
    }
    res.status(200).send();
  })
});

router.delete('/:id', function(req, res) {
  db.run("DELETE FROM tasks WHERE id=$id", {
    $id: req.params.id
  }, (err) => {
    if(err) {
      res.status(400).send();
      console.error(err);
      return;
    }
    res.status(200).send();
  });
});


module.exports = router;
