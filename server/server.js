const express = require("express");
const path = require("path");
const routes = require("./routes");

const app = express();

app.set("port", process.env.PORT || 5000);

app.use(routes);

app.listen(app.get("port"), function() {
    console.log("Server listening on port ", app.get("port"));
});
