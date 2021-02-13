import { QueryInterface, DataTypes } from "sequelize";

export async function up(q: QueryInterface) {
    await q.createTable('brands', {
        id : {
            type : DataTypes.INTEGER, 
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name : {
            type: DataTypes.STRING,
            allowNull: false
        }        
    });
}