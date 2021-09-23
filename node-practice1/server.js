const express = require('express')
const app = express()

const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: "127.0.0.1",
  user: "root",
  password : "enekelx1",
  connectionLimit: 5,
  database: "yos"
});

const server = app.listen(3000, () => {
  console.log("Start Server : localhost: 3000")
})

app.set("views", __dirname + "/views")
app.set("view engine", "ejs")
app.engine("html", require('ejs').renderFile)

app.get('/', function (req, res) {
  res.render("index.html")
})

app.get('/about', function (req, res) {
  res.render("about.html")
})

app.get('/products', function (req, res) {
  pool.getConnection()
    .then(conn => {
    
      conn.query("SELECT * FROM yos_product")
        .then(result => { // res: { affectedRows: 1, insertId: 1, warningStatus: 0 }
          res.send(result)
          conn.release(); // release to pool
        })
        .catch(err => {
          conn.release(); // release to pool
        })
        
    }).catch(err => {
      //not connected
    });
})