require("dotenv").config();
const express = require("express");
const db_mysql = require("./models");
const cors = require("cors");

const app = express();
const port = process.env.API_PORT;
const UserRouter = require("./routes/UserRoute");
const MessegersRouter = require("./router/MessegersRoute")

app.listen(port, () => {
  console.log(`Server app listening on`)
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", UserRouter)
app.use("/api/messeger", MessegersRouter)

const db_mysql = require("./models");
db_mysql.sequelize.sync();

const UserRoute = require("./src/routes/UserRoute");
const MessengerRoute = require("./src/routes/MessengerRoute");
app.use("/api/user", UserRoute);
app.use("/api/msg", MessengerRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on 
http://localhost:${port}`);
});
