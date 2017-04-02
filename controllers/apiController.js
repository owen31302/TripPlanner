/**
 * Created by owen on 4/1/17.
 */

var planner  = require('../models/tripplanner');
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended : true}));

    app.get('/api/todos/:username', function (req, res) {

        planner.find({ username : req.params.username }, function (err, todos) {
            if(err) throw err;

            res.send(todos);
        });
        
    });

    app.get('/api/todo/:id', function (req, res) {

        planner.findById({ _id : req.params.id }, function (err, todo) {
            if(err) throw err;

            res.send(todo);
        });

    });

    app.post( '/api/todo', function (req, res) {

        if(req.body.id){
            planner.findByIdAndUpdate(req.body.id, {
                todo : req.body.todo,
                isDone : req.body.isDone,
                hasAttachment : req.body.hasAttachment
            }, function (err, todo) {
                if(err) throw err;

                res.send('Success');
            });
        }

        else{

            var newTodo= planner({
                username : 'owen',
                todo : req.body.todo,
                isDone : req.body.isDone,
                hasAttachment : req.body.hasAttachment
            });
            newTodo.save(function (err) {
                if(err) throw err;

                res.send('Success');
            });
        }
    });

    app.delete('/api/todo', function (req, res) {

        planner.findByIdAndRemove(req.body.id, function (err) {
            if(err) throw err;

            res.send('Success');
        });
        
    });
}
