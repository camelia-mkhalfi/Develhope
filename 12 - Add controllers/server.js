const express = require("express");
require("express-async-errors");
const morgan = require("morgan");
const dotenv = require("dotenv");
require("./controller/planets.js");
const mainRouter = require("./router/planets.js");

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());

app.use("/api/planets", mainRouter);

app.listen(port, () => {
  console.log("Server started on http://localhost:" + port);
});
