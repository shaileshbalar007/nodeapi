module.exports = (app) => {
  const masterdbapi = require("./masterdbapi.js");

  app.get("/getbusiness", masterdbapi.getbusiness);
 
};
