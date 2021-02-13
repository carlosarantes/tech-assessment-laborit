import { Model, Sequelize, DataTypes, BuildOptions } from "sequelize";

interface Brand extends Model {
    readonly id : number;
    name: string;
}

type BrandStatic = typeof Model & {
    new (values?: Partial<Brand>, options?: BuildOptions) : Brand;
}

export function build(sequelize: Sequelize) {
    const brand = sequelize.define('brand', {
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
    }, { timestamps : true }) as BrandStatic;
    return brand;
}