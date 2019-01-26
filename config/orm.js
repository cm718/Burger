
// Import (require) connection.js into orm.js
const connection = require('../config/connection');

// create the methods that will execute the necessary MySQL commands in the controllers
const orm = {
    selectAll: function(){},

    insertOne: function(){},

    updateOne: function(){}
};

// Export the ORM object in module.exports.
module.exports = orm;