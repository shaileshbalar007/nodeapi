const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 4001;
app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());
app.get("/", (req, res) => { 
  res.json({ message: "welcome to ne api" });
});

require("./masterroute.js")(app);
app.listen(PORT, () => {
  console.log("Server is running in the 4001 port number");
})