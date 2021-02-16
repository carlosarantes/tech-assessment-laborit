const { Model, DataTypes } = require("sequelize");

class Vehicle extends Model {
    static init(sequelize) {
        super.init({
            value: DataTypes.STRING,
            yearModel: DataTypes.INTEGER,
            fuel: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
       this.belongsTo(models.Brand, { foreignKey: 'brand_id' , as: 'brand' });
       this.belongsTo(models.CarModel, { foreignKey: 'brand_id' , as: 'model' });
    }
}

module.exports = Vehicle;