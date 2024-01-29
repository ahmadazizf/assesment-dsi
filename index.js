const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

// Import routes here
const exampleRoute = require("./routes/examples");
const routeBooks = require('./routes/books');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Use your route here
app.use("/api/v1/example", exampleRoute);
app.use('/api/v1/books', routeBooks)

app.get('/', (req, res) => {
  res.json('Okay')
});



app.listen(
  port,
  () => {
    console.log("Running on port " + port)
  }
);