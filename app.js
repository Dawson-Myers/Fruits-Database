//jshint esversion:6

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});



const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are so yummy!"
});

// fruit.save();


const userSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const User = mongoose.model("User", userSchema);

 const pineapple = new Fruit({
   name: "Pineapple",
   rating: 9,
   review: "Great Fruit."
 });

 pineapple.save();

const user = new User ({
  name: "Amy",
  age: 12,
  favoriteFruit: pineapple
});

user.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The Best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 5,
  review: "Its Alright."
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Sweet, but slimy."
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });


Fruit.find(function(err, fruits){
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "5fa9ce49ef862b19903cb173"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document,");
//   }
// });

// Fruit.deleteOne({name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the entry!");
//   }
// });

// User.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the entries!");
//   }
// });
