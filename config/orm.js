
// Import (require) connection.js into orm.js
const connection = require('../config/connection');



// create the methods that will execute the necessary MySQL commands in the controller
const orm = {
    // Method to receive all the burgers in the table
    selectAll: function(tableInput, cb) {
        const query = `SELECT * FROM ${tableInput};`;
        connection.query(query, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    },

    // Method to add a new burger to the table
    insertOne: function(burger_name, devoured, cb){
        const query = `INSERT INTO burgers (burger_name, devoured) VALUES('${burger_name}', ${devoured})`;
        console.log(query);
        connection.query(query, function(err, result){
            if(err) {
                throw err;
            }
            console.log(result);
            cb(result);
        });
    },

    // Method to update a burger's data based on the id given
    updateOne: function(id, cb){
        const burger = req.body.burger_name;
        const devoured = req.body.devoured;
        const id = req.params.id;
        const query = `UPDATE burgers SET burger_name = ?, devoured = ? WHERE id = ?`;
        
        connection.query(query, function(err, result){
            if(err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the ORM object to go to burger.js in the models folder.
module.exports = orm;