/**
 * Created by owen on 3/30/17.
 */

//var greet = require('./greet.js'); either will work
var greet = require('./greet');
greet.greet();

function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Person.prototype.greet = function () {
    console.log('Hello '+ this.firstname + ' ' + this.lastname);
};

var owen = new Person('Owen', 'Lin');
console.log(owen);
console.log(owen.firstname);
console.log(owen.lastname);
owen.greet();

var lisa = new Person('Lisa', 'Lin');
lisa.greet();

// pass by reference
function change(d) {
    d.prop1 = function () {};
    d.prop2 = {};
}

var c = {}; // create an object
c.prop1 = {};
change(c);
console.log(c);

// the way to execute function right away
(function (lastname) {
        var firstname = 'John';
        console.log(firstname);
        console.log(lastname);
}('Liu'));