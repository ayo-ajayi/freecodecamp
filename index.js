const dotenv = require("dotenv");
dotenv.config();
const express = require("express"),
  bodyParser = require("body-parser"),
  PORT = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  app = express(),
  Kitten = require("./model");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongo/Mongoose Connected`);
  })
  .catch((err) => {
    console.log(`Error connecting to DB:`, err.message);
    return process.exit(1);
  });

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json("application/json"));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

app.get("/", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase")
    res.json({ message: "HELLO JSON" });
  else res.json({ message: "Hello json" });
});

app.get("/dev", (req, res) => {
  let first = req.query.first;
  let last = req.query.last;
  if (last && first) {
    let resObj = { name: `${first} ${last}` };
    res.send(resObj);
  } else if (last) {
    let resObj = { name: `${last}` };
    res.send(resObj);
  } else if (first) {
    let resObj = { name: `${first}` };
    res.send(resObj);
  }
});


app.get(
  "/:name/echo",
  (req, res, next) => {
    next();
  },
  (req, res) => {
    const silence = new Kitten({ name: "Silence", pet: this.pet });

    res.send({
      name: req.params.name,
      job: "dev",
      time: new Date().toString(),
      pet: silence.pet,
    });
  }
);


app.post("/dev", (req, res) => {
  const person = new Person(JSON.parse(req.body));
  console.log(JSON.stringify(person))
  //res.json(person);
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));
