const { Model, DataTypes } = require("sequelize");

class CarModel extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.hasMany(models.Vehicle, { foreignKey : 'brand_id', as : 'vehicles' })
    }
}

module.exports = CarModel;