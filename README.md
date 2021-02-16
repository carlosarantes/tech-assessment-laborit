docker run -p 3306 m


docker run -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root mysql:5.7


yarn sequelize db:create

yarn sequelize-cli migration:generate --name CreateBrandTable

yarn sequelize-cli migration:generate --name CreateCarModelTable

yarn sequelize-cli migration:generate --name CreateVehicleTable  

yarn sequelize-cli migration:generate --name CreateUserTable  

yarn sequelize db:migrate

yarn sequelize db:migrate:undo