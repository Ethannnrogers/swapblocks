const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));

require("./route/routes.js")(app);

app.listen(port, function() {
    console.log("App listening on port:" + port)
});

