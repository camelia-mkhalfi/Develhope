const express = require('express');
const morgan = require('morgan');
const planetsRouter = require('./router/planets');

const app = express();
const port = 3000;

app.use(morgan("dev"));

app.use('/api/planets', planetsRouter); 

app.get("/", (req, res) => {
  res.status(200).json({msg: "Hello world!"});
});

app.listen(port, () => {
  console.log("Listening on port");
});