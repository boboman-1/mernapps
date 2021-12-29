const express = require("express");
const path = require("path");
//const cors = require("cors");

const app = express();
const db = require("./models");

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend/build')));

// simple catch-all route
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

const tutControl = require('./controllers/tutorials.controller');

app.get("/tutorials/findAll", tutControl.findAll);
app.get("/tutorials/create", tutControl.create);
app.get("/tutorials/deleteAll", tutControl.deleteAll);

// app.use("/tutorials", tutControl);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


db.mongoose
   .connect(db.url, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });