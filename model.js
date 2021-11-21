const mongoose = require("mongoose");
const kittySchema = new mongoose.Schema({
  name: String,
  pet: { type: Date, default: Date.now },
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
});
const Kitten = mongoose.model("Kitten", kittySchema);
const Person = mongoose.model("Person", personSchema);

module.exports = {
  Kitten,
  Person,
};
