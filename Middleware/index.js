require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.API_PORT;

const db_mysql = require("./models");
db_mysql.sequelize.sync();

const userRoute = require("./src/routes/UserRoute");
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on 
http://localhost:${port}`);
});
