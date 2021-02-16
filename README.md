# Laborit Technical Assessment

This read me is about a laborit technical assessmeent. :)

## Before running the application

If you mean to run the application with NPM or Yarn, you need, first of all, to create a `.env` file on project's root, there is an `.env.example` which you can base on. 

Fulfill this file according to your needs and check if you have an running instance of MySql.


## Running with NPM and YARN

To run this application with NPM (node version >= 12) and Yarn just run the following commands in the projects root: 

- yarn sequelize db:create
- yarn sequelize db:migrate
- npm run start

## Swagger

This app is documented with swagger. Once your application has started, you just need to go to your browser and access the link: `http://localhost:{PORT}/swagger`.


## Environment variables

- `PORT` : Port which express server will listen to.
- `DB_HOST` : Mysql host.
- `DB_USERNAME` : Mysql username.
- `DB_PASSWORD` : Mysql password.
- `DB_DATABASE` : Mysql database.