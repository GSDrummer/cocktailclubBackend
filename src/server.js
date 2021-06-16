const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("./db/connection");
const { userRouter } = require("./models/user.routes");

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
