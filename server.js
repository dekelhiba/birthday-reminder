const { error, Console } = require("console");
const { response, request } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//lets the server accept json as a body instead of a post element
app.use(express.json());

app.get("/", (request, response) => {
  response.sendFile("./src/index.html", { root: __dirname }, (err) => {
    if (err) {
      response.status(500).send("sorry, out of order");
    }
  });
});
app.post("/", (request, response) => {
  console.log("This is the api endpoint");
  console.log(request.body);
});
//git test (:X)
//use an environment variable to make the port dinamic
const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`listening on port ${port}...`));
app.use(express.static("src"));

const users = [
  {
    userId: 1,
    firstName: "Krish",
    lastName: "Lee",
    phoneNumber: "123456",
    emailAddress: "krish.lee@learningcontainer.com",
  },
  {
    userId: 2,
    firstName: "racks",
    lastName: "jacson",
    phoneNumber: "123456",
    emailAddress: "racks.jacson@learningcontainer.com",
  },
  {
    userId: 3,
    firstName: "denial",
    lastName: "roast",
    phoneNumber: "33333333",
    emailAddress: "denial.roast@learningcontainer.com",
  },
  {
    userId: 4,
    firstName: "devid",
    lastName: "neo",
    phoneNumber: "222222222",
    emailAddress: "devid.neo@learningcontainer.com",
  },
  {
    userId: 5,
    firstName: "jone",
    lastName: "mac",
    phoneNumber: "111111111",
    emailAddress: "jone.mac@learningcontainer.com",
  },
];

//fill the db name when created
const dbName = "DBName";

//declar the db connection

// mongoose.connect('mongodb://localhost/' + dbName, {useNewUrlParser: true})
// const db = mongoose.connection
// db.on('error',(error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))
