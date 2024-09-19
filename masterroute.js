module.exports = (app) => {
  const masterdbapi = require("./masterdbapi.js");

  app.get("/getbusiness", masterdbapi.getbusiness);
  app.get("/getbusinessbyid/:id", masterdbapi.getbusinessbyid);
};
