const mongoose = require("mongoose");
const db=require('../models/index');
const Role = db.role;

const connectDB = async () => {
  
    try {
      const conn = await mongoose.connect("mongodb+srv://Applicatiion:Application@cluster0.9wbet.mongodb.net/Chats?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
       // useFindAndModify: true,
      });
     
     
      console.log(`MongoDB Connected: ${conn.connection.host}`);
      initial();
     
    } catch (error) {
      console.log(`Error: ${error.message}`);
      process.exit();
    }
  };
  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'user' to roles collection");
        });
        new Role({
          name: "moderator"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'moderator' to roles collection");
        });
        new Role({
          name: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }
  
  module.exports = connectDB;