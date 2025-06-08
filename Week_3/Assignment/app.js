const express = require("express");
const app = express();
const port = 73;
app.use(express.json());

const router = require("./routers");
app.use('/app', router);
app.listen(port);