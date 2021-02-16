const { Model, DataTypes } = require("sequelize");

class Brand extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize,
            tableName : 'brands',
            modelName: 'brands'
        })
    }

    static associate(models) {
        this.hasMany(models.vehicles, { foreignKey : 'brand_id', as : 'vehicles' })
    }
}

module.exports = Brand;