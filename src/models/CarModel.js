const { Model, DataTypes } = require("sequelize");

class CarModel extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize,
            tableName : 'models',
            modelName: 'models'
        })
    }

    static associate(models) {
        this.hasMany(models.vehicles, { foreignKey : 'brand_id', as : 'vehicles' })
    }
}

module.exports = CarModel;