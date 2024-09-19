const mysql = require("mysql2");

var con = mysql.createConnection({
  host: "bkoyzy7qcjj7lckuspzc-mysql.services.clever-cloud.com",
  user: "urcld9bezeut1ycc",
  password: "JksrdxMZy4LHJdNtB5NH",
  database: "bkoyzy7qcjj7lckuspzc",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to database");
  }
});
exports.getbusiness = (req, res) => {
  console.log("Api Is call");
  const sql = "SELECT * FROM tbl_business";
  con.query(sql, (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Api call successfully and return data.");
      res.end(JSON.stringify(rows));
    }
  });
};

exports.getbusinessbyid = (req, res) => {
  console.log("Api Is call");
  const sql = "SELECT * FROM tbl_business where business_id = ?";
  con.query(sql,[req.params.id] ,(err, rows) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Api call successfully and return data.");
      res.end(JSON.stringify(rows));
    }
  });
};
