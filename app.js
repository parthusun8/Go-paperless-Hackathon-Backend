const http = require("http");
var express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const port = 3000;

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello RISHI!");
});

app.use("/users", require("./Routes/userRoutes"));
app.use("/dropbox", require("./Routes/dropboxRouter"));
app.use("/hellosign", require("./Routes/helloSignRouter"));
// app.get("/:username", (req, res) => {
//   res.send(`Hey ${req.params.username}`);
// });
app.listen(port);
