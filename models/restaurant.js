var db = require('../db/index');
var Sequelize = require('sequelize');

var Restaurant = db.define('restaurant', {
  name: {
    type: Sequelize.STRING
  },
  cuisine: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  },
  price:{
    type: Sequelize.INTEGER,
    validate: { max: 5, min: 1}
  }
})

module.exports = Restaurant;
