var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://pavel:pavel123@ds151228.mlab.com:51228/meanstack12', ['tasks']);

// Get All Tasks
router.get('/tasks', function (request, response, next) {
    db.tasks.find(function (error, tasks) {
        if (error) {
            response.send(error);
        }
        response.json(tasks);
    });
});

// Get Single Task
router.get('/tasks/:id', function (request, response, next) {
    db.tasks.findOne({ _id: mongojs.ObjectId(request.params.id) }, function (error, task) {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
});

// Save Task
router.post('/tasks', function (request, response, next) {
    var task = request.body;
    if (!task.title || !(task.IsDone + '')) {
        response.status(400);
        response.json({
            "error": "Bad Data"
        });
    } else {
        db.tasks.save(task, function (error, task) {
            if (error) {
                response.send(error);
            }
            response.json(task);
        });
    }
});

// Delete Task
router.delete('/tasks/:id', function (request, response, next) {
    db.tasks.remove({ _id: mongojs.ObjectId(request.params.id) }, function (error, task) {
        if (error) {
            response.send(error);
        }
        response.json(task);
    });
});

// Update Task
router.put('/tasks/:id', function (request, response, next) {
    var task = request.body;
    var updTask = {};

    if (task.isDone) {
        updTask.isDone = task.isDone;
    }

    if (task.title) {
        updTask.title = task.title;
    }

    if (!updTask) {
        response.status(400);
        response.json({
            "erroror": "Bad Data"
        });
    } else {
        db.tasks.update({ _id: mongojs.ObjectId(request.params.id) }, updTask, {}, function (error, task) {
            if (error) {
                response.send(error);
            }
            response.json(task);
        });
    }
});

router.post('/tasks/updateAllStatus/', function (request, response, next) {
    let body = request.body;

    db.tasks.update({}, {$set: { isDone: body.isDone }}, { multi: true }, function (error) {
        if(error){
            response.send(error);
        }
        response.send('{}');
    });
});

router.get('/tasks/getByName/:title', function (request, response, next) {
    db.tasks.find({title: {'$regex' : request.params.title, '$options' : 'i'}}, function(error, tasks){
        if(error){
            response.send(error);
        }
        response.json(tasks);
    });
});

module.exports = router;