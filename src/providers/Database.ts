import { Sequelize } from "sequelize";

/*
constructor(database: string, username: string, password?: string, options?: Options);
constructor(database: string, username: string, options?: Options);
constructor(options?: Options);
*/

const connection = new Sequelize('database', 'root', 'root', {
    dialect : 'mysql',
    host : '',
    define : {
        timestamps: true,
        underscored : true,
    },
});