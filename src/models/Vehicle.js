const { Model, DataTypes } = require("sequelize");

class Vehicle extends Model {
    static init(sequelize) {
        super.init({
            value: DataTypes.STRING,
            year_model: DataTypes.INTEGER,
            fuel: DataTypes.STRING,

            brand_id : DataTypes.INTEGER,
            model_id : DataTypes.INTEGER,
        }, {
            sequelize,
            tableName : 'vehicles',
            modelName: 'vehicles'
        })
    }

    static associate(models) {
       this.belongsTo(models.brands, { foreignKey: 'brand_id' , as: 'brand' });
       this.belongsTo(models.models, { foreignKey: 'model_id' , as: 'model' });
    }
}

module.exports = Vehicle;