// Require in the ORM
const orm = require('../config/orm');

// Use the functions created in ORM
const burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function(name, cb) {
        orm.insertOne(name, 0, cb);
      },
      updateOne: function(id, cb) {
        var condition = "id= " + id;
        orm.updateOne("burgers", {
          devoured: true
        }, condition, cb);
      }
};

// Export the functions that were created in ORM
module.exports = burger;