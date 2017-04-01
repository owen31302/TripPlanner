/**
 * Created by owen on 4/1/17.
 */

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var plannerSchema = new Schema(
    {
        username : String,
        todo : String,
        isDone : Boolean,
        hasAttachment : Boolean
    }
);

// create model using this schema
var Todos = mongoose.model('Todos', plannerSchema);

module.exports = Todos;