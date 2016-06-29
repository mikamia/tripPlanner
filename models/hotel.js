var db = require('../db/index');
var Sequelize = require('sequelize');


var Hotel = db.define('hotel', {
  name: {
    type: Sequelize.STRING
  },
  num_stars: {
    type: Sequelize.INTEGER,
    validate: { max: 5, min: 1}
  },
  amenities: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Hotel;
