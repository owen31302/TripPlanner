/**
 * Created by owen on 4/1/17.
 */

var planner = require('../models/tripplanner');

module.exports = function (app) {

    app.get('/api/setupPlanner', function (req, res) {

        // seed database
        var starter = [
            {
                username : 'owen',
                todo : 'code',
                isDone : true,
                hasAttachment : false
            },
            {
                username : 'owen',
                todo : 'lunch',
                isDone : false,
                hasAttachment : true
            },
            {
                username : 'owen',
                todo : 'rest',
                isDone : false,
                hasAttachment : false
            }
        ];
        planner.create(starter, function (err, result) {
            res.send(result);
        });

    });

}