const Sequelize = require("sequelize");
const dbConfig = require("../db/config");

const Brand = require("../models/Brand");
const CarModel = require("../models/CarModel");
const Vehicle = require("../models/Vehicle");

const connection = new Sequelize(dbConfig);

Brand.init(connection);
CarModel.init(connection);
Vehicle.init(connection);

Brand.associate(connection.models);
CarModel.associate(connection.models);
Vehicle.associate(connection.models);

module.exports = connection;