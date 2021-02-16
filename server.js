const Application = require("./src/bootstrap/Application");

const port = process.env.PORT || 3338;
Application.app.listen(port, () => {
    console.log(`Listening to port: ${port} ... `)
});