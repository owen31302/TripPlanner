/**
 * Created by owen on 4/1/17.
 */

var configValues = require('./config');

module.exports = {

    getDBConnectionString : function () {
        return 'mongodb://' + configValues.username +':' + configValues.pwd + '@ds149030.mlab.com:49030/addressbook';
    }

}