const mongoose = require(`mongoose`);
require("dotenv").config();

const connection = async () => {
  console.log(process.env.MONGO_URI);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("WAHEY");
  } catch (error) {
    console.log(error);
  }
};

connection();
