const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Received ${req.method} request from ${req.ip} to ${req.url}`);
  next();
});

let planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get('/planets', (req, res) => {
  res.json(planets);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
